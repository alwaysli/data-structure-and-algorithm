/**
 * 双向链表
 */
import LinkedList from "./linkList.mjs";
import { DoublyNode } from "../models/linked-list-models.mjs";

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn); // {5}
    this.tail = undefined; // {6} 新增的
  }

  // 向链表尾部添加一个新元素
  push(element) {
    const node = new DoublyNode(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    this.count++;
  }

  // 向链表的特定位置插入一个新元素。
  insert(element, position) {
    if (position >= 0 && position < this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (position === 0) {
        this.head = node;
        if (!current) {
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
        }
      } else if (position === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const prev = this.getElementAt(position - 1);
        current = prev.next;
        node.next = current;
        node.prev = prev;
        prev.next = node;
        current.prev = node;
      }
      this.count++;
      return true; // 插入成功
    }
    return false; // 插入失败
  }

  // 从链表的特定位置移除一个元素。
  removeAt(position) {
    // 下标越界，返回 undefined
    if (position < 0 || position >= this.count || this.count === 0)
      return undefined;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else {
      // 使用 getElementAt 替换以上代码
      const previous = this.getElementAt(position - 1);
      const current = previous.next;

      // 移除 current, 将previous 与 next 连接起来
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.count--;
    return current.element;
  }
}
export default DoublyLinkedList;

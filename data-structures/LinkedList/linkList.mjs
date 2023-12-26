import { defaultEquals } from "../util.mjs";
import { Node } from "../models/linked-list-models.mjs";

export default class LinkList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  // 向链表尾部添加一个新元素
  push(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  // 向链表的特定位置插入一个新元素。
  insert(element, position) {
    if (position >= 0 && position < this.count) {
      const node = new Node(element);
      let current = this.head;
      if (position === 0) {
        this.head = node;
        node.next = current;
      } else {
        current = this.getElementAt(position - 1);
        node.next = current.next;
        current.next = node;
      }
      this.count++;
      return true; // 插入成功
    }
    return false; // 插入失败
  }

  // 从链表中移除一个元素。true:移除成功；false:移除失败
  remove(element) {
    const position = this.indexOf(element);
    if (position > -1) {
      // 只要存在该元素，便能正常移除
      this.removeAt(position);
      // const previous = this.getElementAt(position - 1);
      // const current = previous.next;

      // // 移除 current, 将previous 与 next 连接起来
      // previous.next = current.next;
      // this.count--;
      return true;
    }
    return false;
  }

  // 从链表的特定位置移除一个元素。
  removeAt(position) {
    // 下标越界，返回 undefined
    if (position < 0 || position >= this.count || this.count === 0)
      return undefined;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      // let previous = this.head;
      // for (let i = 0; i < position; i++) {
      //   previous = current;
      //   current = previous.next;
      // }

      // 使用 getElementAt 替换以上代码
      const previous = this.getElementAt(position - 1);
      const current = previous.next;

      // 移除 current, 将previous 与 next 连接起来
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }

  // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
  getElementAt(position) {
    if (position < 0 || position >= this.count || this.count === 0)
      return undefined;
    let current = this.head;
    for (let i = 0; i < position && current; i++) {
      current = current.next;
    }
    return current;
  }

  // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {
    if (!this.head) return -1;
    let current = this.head;
    for (let i = 0, len = this.count; i < len; i++) {
      if (this.equalsFn(current.element, element)) {
        return i;
      } else {
        current = current.next;
      }
    }
    return -1;
  }

  // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
  isEmpty() {
    return this.count > 0;
  }

  // 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {
    return this.count;
  }

  // 返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
  toString() {
    if (!this.head) return "";
    let current = this.head;
    let str = `${current.element}`;
    while (current.next) {
      current = current.next;
      str = `${str},${current.element}`;
    }
    return str;
  }
}

// 实现一个 双端队列

export default class Deque {
  constructor() {
    this.count = 0; // 队列长度，即队列最后一个元素的位置
    this.items = {}; // 队列数据项
    this.lowestIndex = 0; // 当前队列第一个元素的位置
  }
  // 该方法在双端队列前端添加新的元素。
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestIndex > 0) {
      this.lowestIndex--;
      this.items[this.lowestIndex] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.lowestIndex = 0;
      this.items[0] = element;
      this.count++;
    }
  }

  // 该方法在双端队列后端添加新的元素（实现方法和 Queue 类中的 enqueue 方法相同）。
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的 dequeue 方法相同）。
  removeFront() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestIndex];
    delete this.items[this.lowestIndex];
    this.lowestIndex++;
    return result;
  }

  // 该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的 pop 方法一样）。
  removeBack() {
    if (this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek 方法一样）。
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestIndex];
  }

  // 该方法返回双端队列 后端的第一个元素
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count];
  }

  // 查看队列的大小
  size() {
    return this.count - this.lowestIndex;
  }

  // 判断队列是否为空
  isEmpty() {
    return this.count - this.lowestIndex === 0;
  }

  // 清空队列
  clear() {
    this.count = 0;
    this.items = {};
    this.lowestIndex = 0;
  }

  toString() {
    if (this.isEmpty()) return "";
    let str = `${this.items[this.lowestIndex]}`;
    for (let i = this.lowestIndex + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`;
    }
    return str;
  }
}

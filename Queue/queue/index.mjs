// 实现一个队列

export default class Queue {
  constructor() {
    this.count = 0; // 队列长度，即队列最后一个元素的位置
    this.items = {}; // 队列数据项
    this.lowestIndex = 0; // 当前队列第一个元素的位置
  }
  // 向队列中添加元素
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 队列中删除元素,并返回该元素，队列第一个元素的位置后移1位
  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestIndex];
    delete this.items[this.lowestIndex];
    this.lowestIndex++;
    return result;
  }

  // 查看第一个元素
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestIndex];
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

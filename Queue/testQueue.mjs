import Queue from "./queue.mjs";
// 测试队列
const queue = new Queue();
queue.enqueue("tom");
console.log(1, queue, queue.size());

queue.enqueue("jack");
console.log(2, queue, queue.size());

queue.enqueue("tom");
console.log(3, queue, queue.size());

queue.dequeue();
console.log(4, queue, queue.size());

queue.dequeue();
console.log(5, queue, queue.size());

queue.enqueue("mother");
console.log(6, queue, queue.size());

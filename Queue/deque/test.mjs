import Deque from "./index.mjs";
// 测试队列
const deque = new Deque();

console.log(deque.isEmpty()); // 输出 true

deque.addBack("John");
deque.addBack("Jack");
console.log(deque.toString()); // John, Jack

deque.addBack("Camila");
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size()); // 输出 3
console.log(deque.isEmpty()); // 输出 false

deque.removeFront(); // 移除 John
console.log(deque.toString()); // Jack, Camila

deque.removeBack(); // Camila 决定离开
console.log(deque.toString()); // Jack

deque.addFront("John"); // John 回来询问一些信息
console.log(deque.toString()); // John, Jack

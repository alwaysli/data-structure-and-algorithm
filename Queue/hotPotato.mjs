import Queue from "./queue/index.mjs";

/**
 * 使用队列实现击鼓传花，每轮传递 num 次，花在哪个小朋友手上，哪个小朋友就淘汰，直到剩下一个孩子
 * @param {*} names 参与游戏的小朋友名字
 * @param {*} num 传递次数
 */
const hotPotato = (names, num) => {
  let queue = new Queue();
  names.forEach((element) => {
    queue.enqueue(element);
  });
  while (queue.size() > 1) {
    for (let index = 0; index < num; index++) {
      queue.enqueue(queue.dequeue());
    }
    const result = queue.dequeue();
    console.log(`小朋友 ${result} 被淘汰`);
  }
  console.log(`小朋友 ${queue.dequeue()} 赢得比赛！！！`);
};

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
hotPotato(names, 7);

import Deque from "./deque/index.mjs";

// 回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam或 racecar。
/**
 * 使用 双端队列判断字符串是否是回文, 回文列表忽略大小写及空格
 * @param {*} str
 */
const palindromeChecker = (str) => {
  if (!str) return false;
  const deque = new Deque();
  let isPalindrome = true;
  let first = "";
  let last = "";
  const str2Lowercase = str.toLocaleLowerCase().split(" ").join("");
  for (let index = 0, len = str2Lowercase.length; index < len; index++) {
    deque.addBack(str2Lowercase.charAt(index));
  }
  while (deque.size() > 1 && isPalindrome) {
    first = deque.removeFront();
    last = deque.removeBack();
    if (first !== last) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
};

console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log(
  "Was it a car or a cat I saw",
  palindromeChecker("Was it a car or a cat I saw")
);
console.log("Step on no pets", palindromeChecker("Step  on no pets"));

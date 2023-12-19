import NodeList from "./linkList.mjs";

const nodeList = new NodeList();
nodeList.push("jack");
console.log(nodeList.toString(), nodeList.size());
nodeList.push("tom");
console.log(nodeList.toString(), nodeList.size());
nodeList.push("lili");
console.log(nodeList.toString(), nodeList.size());

console.log(nodeList.indexOf("tom"), nodeList.getElementAt(2));
nodeList.remove("tom");
console.log(nodeList.toString(), nodeList.size());
nodeList.insert("tom", 1);
console.log(nodeList.toString(), nodeList.size());
nodeList.removeAt(1);
console.log(nodeList.toString(), nodeList.size());

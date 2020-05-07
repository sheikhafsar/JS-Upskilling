console.log("Use Set");

console.log("use chaining to add/delete");

let mySet = new Set();

mySet.add(1).add(2).add(3).delete(2);

console.log(mySet);

console.log("convert array to set to remove duplicates");

const numArray = [1,2,3,1];

let numSet = new Set(numArray);
console.log(numSet);

console.log("convert set to array");
console.log(...numSet);
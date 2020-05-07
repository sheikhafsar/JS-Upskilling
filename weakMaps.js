console.log("WeakMaps");

const obj = new Map();

const key1 = {};
const key2 = {name: "John"};
const key3 = {age:10};

obj.set(key1, "val1").set(key2, "val2").set(key3, "val3");

console.log(obj.get(key2));

for(let entry of obj){
    console.log(entry[0]);
}
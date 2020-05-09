console.log("Map, Reduce, Filter");

const numArray = [1,2,3];

const cb1 = function(e){
    return e*3;
}

const newArray = numArray.map(cb1);
console.log(newArray);

const cb2 = function(e){
    if(!(e%2==0))
    return e;
}
const newArray2 = numArray.filter(cb2);
console.log(newArray2);

console.log("Use Reduce and accumulator to add numbers");
const numObjects = [{num:1},{num:2},{num:3}];

const cb = function(acc, e){
    return acc + e.num;
}

//0 param set acc to 0
const result = numObjects.reduce(cb,0);
console.log(result);
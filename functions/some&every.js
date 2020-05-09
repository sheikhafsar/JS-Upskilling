console.log("Array.some() Demo");

const arr = [1,5,4,10];

let cb = function(element){
    return element === 5;
}

let hasSome5 = arr.some(cb);

console.log(hasSome5);

console.log("Array.every() Demo");
//check if every element is greater than 5
let greaterThan5 = function(element){
    return element > 5;
}

let eleGreaterThan5 = arr.every(greaterThan5);

console.log(eleGreaterThan5);
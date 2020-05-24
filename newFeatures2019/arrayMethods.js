console.log("Demo - arrymethods -> flat & flatMaps");

//by default array.flat()flatens to 1 level down
//can specify number of levels or Infinity for deeply nested arrays

const arr = [1,[2,[[[[[[3]]]]]]]];

let total = arr.flat(Infinity).reduce((a,v)=>a+v,0);

console.log(total);

console.log("FlatMap demo - faltten only one level");

const ary = ["I love u","Do u love me?"];

const faltten = ary.flatMap(v => v.split(' '));
console.log(faltten);
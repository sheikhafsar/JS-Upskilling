console.log("Array.sort() - sort contents of array as string");
const arr = [1,5,4,10];

//use callback function to treat contents of array as num
const cb = function(a,b){
    return a - b;
}

arr.sort(cb);

console.log(arr);
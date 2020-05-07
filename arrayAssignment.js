console.log("Find the biggest number in array.");

const numArray = [1,2,5,3,100];

let max = Number.NEGATIVE_INFINITY;

for(let val of numArray){
    max = (val>max)? val:max;
}
console.log(max);

console.log("Find 2 biggest number in array.");

let max1 = Number.NEGATIVE_INFINITY;
let max2 = Number.NEGATIVE_INFINITY;

for(let val of numArray){
    if(val>max1){
        max2 = max1;
        max1 = val;
    }else{
        if(val>max2){
            max2 = val;
        }
    }
}

console.log(max1,max2);

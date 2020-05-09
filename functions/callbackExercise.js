//1. operate on 1 to n based on callback function

const add = function(a, b){
    return a+b;
}
const multiply = function(a, b){
    return a*b;
}

const calc = function(cb,n=1){
    if(n==0)
        return 0;

    if(n==1)
        return 1;

    let total=1;
    for(let i=2; i<=n; i++){
        total = cb(total, i);
    }

    return total;
}

const result = calc(multiply,4);
console.log(result);

//2. operate on array of numbers based on callback function

const numArr = [2, 1, 3];

const calculate = function(cb, numArr=[]){
    console.log(numArr.length);
    if(numArr.length==0)
        return 0;

    if(numArr.length==1)
        return numArr[0];

    let total=numArr[0];
    for(let i=1; i<numArr.length; i++){
        total = cb(total, numArr[i]);
    }

    return total;
}

const output = calculate(multiply,numArr);

console.log(output);
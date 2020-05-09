const host = function(cb){
    cb();
}

const callback = function(){
    console.log("You called me from host.");
}

host(callback);

console.log("Callback usecase");

let add = function(a,b){
    return a+b;
}
let multiply = function(a,b){
    return a*b;
}

let calc = function(calcFunc, num1, num2){
    return calcFunc(num1,num2);
}

let result = calc(multiply,2,3);

console.log(result);
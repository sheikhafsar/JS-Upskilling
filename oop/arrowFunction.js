//arrow function acts like a regular function and has this from lexical scope,
// where as other functions in js act like a object and has its own this.
const add = function(a, b){
    return a+b;
}

let addArrow = (a,b) =>{
    return a+b;
}
//can eliminate use of return
let addArrow = (a,b) => a+b;

//cab eliminate paranthesis for single argument
let sqr = a => a*a;

//can return object
let sqrObj = a => ({square: a*a});
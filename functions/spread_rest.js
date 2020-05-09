console.log("Spread Operators- to split into individual items");

const str = "techy";

console.log([...str]);

console.log({...str});


console.log("Merge Utility");

let array1 = [1,2,3];
let array2 = [5,6,5];

console.log([...array1,...array2]);

console.log("Rest Parameters");

let add = function(div, ...nums){
    let sum=0;
    for(let i=0; i<nums.length; i++){
        sum +=nums[i];
    }
    return sum/div;
}
let sum = add(2, 1,2,3);
console.log(sum);
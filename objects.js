console.log("Iterate through Object");
const profile = {
    name: "John",
    age: 30,
    "got a job": true,
    kids:[
        {
            name:"peter",
            age:10
        },
        {
            name:"Kate",
            age:2
        }
    ]
}
console.log("Using for in ");
for(prop in profile){
    console.log(`key:${prop} - value:${profile[prop]}`);
}

console.log("Using for Of ");
for(let prop of Object.keys(profile)){
    console.log(`key:${prop} - value:${profile[prop]}`);
}

console.log("Destructuring");

const obj = {x:1,y:2};

let {x:x1,y:y1} = obj

console.log(`x: ${x1}, y: ${y1}`);

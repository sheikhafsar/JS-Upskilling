
console.log('3 ways to iterate through arrays');

console.log("1. Using For ");

const gList = ["bread","milk","eggs","tomato"];

let len = gList.length;

for(let i=0; i<=len-1; i++){
    console.log(`${i} - ${gList[i]}`);
}

console.log("2. Using forEach (callback function) ");

gList.forEach((item, index)=>{
    console.log(`${index} - ${item}`);
});

console.log("3. Using for Of (new) ");

for( let [index,item] of gList.entries()){
    console.log(`${index} - ${item}`);
}

for( let item of gList.values()){
    console.log(`${item}`);
}

for( let index of gList.keys()){
    console.log(`${index}`);
}
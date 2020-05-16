//simple promise example.
// const willCleanTheRoom = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let cleanRoom = true;
//         if(cleanRoom){
//             resolve("Room cleaned.");
//         }else{
//             reject("Room not cleaned.");
//         }
//     },2000);
// });  

// willCleanTheRoom.then((resolveStatus)=>{
//     console.log(resolveStatus);
// }).catch((rejectStatus)=>{
//     console.log(rejectStatus);
// }).finally(()=>{
//     console.log("Promise finished");
// });

console.log("Promis chaining example");

const willCleanTheRoom2 = new Promise((resolve,reject)=>{
   
        let cleanRoom = true;
        if(cleanRoom){
            resolve("Room cleaned.");
        }else{
            reject("Room not cleaned.");
        }

});  

const removeGarbage = new Promise((resolve,reject)=>{
    let removedGarbage = true;
    if(removedGarbage)
        resolve("Garbage removed");
    else
        reject("Garbage not removed");
});

const getReward = new Promise((resolve,reject)=>{
    let getReward = true;
    if(getReward)
        resolve("Recieved reward");
    else
        reject("Reward not recieved.")
});

willCleanTheRoom2.then((resolveStatus)=>{
    console.log(resolveStatus);
    return removeGarbage;
}).then((resolveStatus)=>{
    console.log(resolveStatus);
    return getReward;
}).then((resolveStatus)=>{
    console.log(resolveStatus);
    console.log("ALL DONE!!!");
}).catch((rejectStatus)=>{
    console.log(rejectStatus);
});

console.log("Demo - Promise all , race");

Promise.race([willCleanTheRoom2, removeGarbage, getReward]).then((messages)=>{
    console.log(messages);
}).catch((messages)=>{
    console.log(messages);
});
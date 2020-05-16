const doCourse = async () => {
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

    let courseIsRoomClean = await willCleanTheRoom2;
    let isGarbageRemoved = await removeGarbage;
    let haveGottenReward = await getReward;

    console.log(courseIsRoomClean,isGarbageRemoved,haveGottenReward);

}
console.log(1);
doCourse();
console.log(2);

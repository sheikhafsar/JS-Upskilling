//call,apply,bind - demo


const profile = {
    name: "John",
    age:20
};

//setProfileFunc is taken out of profile object as it was loosely bound
const setProfile = function(name, age){
    this.name=name;
    this.age=age;
};

setProfile.call(profile,'peter','30');
console.log(profile);

//use apply() and pass array of parameters

let params =['john',30];

setProfile.apply(profile,params);
console.log(profile);

//use bind() to bind function to object
const boundProfile = setProfile.bind(profile);

console.dir(boundProfile);

boundProfile('romeo',22);
console.log(profile);

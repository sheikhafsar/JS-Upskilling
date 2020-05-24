localStorage.setItem("name","Jack");

const obj = { name: "Jack", age: 25};

localStorage.setItem("profile",JSON.stringify(obj));

console.log(JSON.parse(localStorage.getItem('profile')));
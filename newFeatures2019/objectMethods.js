console.log("Demo - Object.fromEntries -> convert arrays to objects");

const profileArray = [["name","age"],["peter",42]];

const profileObj = Object.fromEntries(profileArray);

console.log(profileObj);

console.log("Demo - Object.entries -> convert objects to arrays");

const items = {tomato:4, potato:5, egg:6};

console.log(Object.entries(items));
//convert object to array and apply map()
const itemsArray = Object.entries(items).map(([item,price])=>{
    return [item, price*2]
})

console.log(itemsArray);

//convert array back to object
const doubledPriceItemObject = Object.fromEntries(itemsArray);

console.log(doubledPriceItemObject);
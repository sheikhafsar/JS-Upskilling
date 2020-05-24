//some errors in js need not be handeled.

console.log("Demo - option catch binding - escape handling some errors");

const obj = {}
try{
    console.log(obj.prop.prop);
}catch{

}
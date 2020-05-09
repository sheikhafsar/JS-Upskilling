const Car = function(color){
    this._color = color;
}

const blueCar = new Car('blue');

console.log(blueCar._color);

//if created without new keyword ..then property is set to window object.
const grayCar = Car('gray');
console.log(grayCar);
console.log(window._color);

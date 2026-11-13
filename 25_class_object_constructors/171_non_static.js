let a = 10;
class Car {
    b;
    constructor(){
        this.b = 20;
        console.log(a);
    }
}

let car_obj = new Car();
console.log(car_obj.b);
console.log(a);
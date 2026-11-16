class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
    foo(){
        console.log("foo called");
    }
}

class Dog extends Animal {
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        super.foo();
        console.log(this.name + " is barking");
    }
}

let dog = new Dog("hassi", "labrador")
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);
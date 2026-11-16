class Father {
    eat(){
        console.log("Hi eating");
    }
}
class Son extends Father{
    walk(){
        console.log("Hi walking");
    }
}

let son_Obj = new Son();
son_Obj.eat();
son_Obj.walk();
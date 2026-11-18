class PolymorphismExample {
  setup(){
    console.log("parent setup");
  }
}

class child extends PolymorphismExample{
     setup(){
console.log("child setup");
    }
}

let c1 = new PolymorphismExample();
let c2 = new child();
c2.setup();
c1.setup();
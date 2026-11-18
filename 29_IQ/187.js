class A {
    who(){
       return ">a";
    }
}

class B extends A {
    who(){
       return ">b" + super.who();
    }
}

class C extends B {
    who(){
       return "c" +  super.who();
    }
}

console.log(new C().who());
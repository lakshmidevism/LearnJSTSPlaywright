class TestClass {
    constructor(testName_given,status_given,priority_given){
        this.testName = testName_given;
        this.status = status_given;
        this.priority = priority_given;
    }

    display(){
        console.log("test name" +" " + this.testName + " " 
            + "is" + " " + this.status +" " + "and priority is" + " " + this.priority);
    }
}

let obj1 = new TestClass("logintest","passed","P0");
let obj2 = new TestClass("signintest","failed","P1");
obj1.display();
obj2.display();
let a = 10;
class testRunner {
    static totalTests = 0;
    static passedTests = 0;
    constructor(testName, passed){
        this.testName = testName;
        this.passed = passed;
        testRunner.totalTests++;
        if(passed){
            testRunner.passedTests++;
        }
        console.log(a);
    }

    static summary(){
        console.log("total passed tests:", testRunner.passedTests +" " + "out of" + " " + testRunner.totalTests);
    }

    lakshmi_fn(){
        return this.testName;
    }
}

    let t1 = new testRunner("login test",true);
    testRunner.summary();
    console.log(t1.lakshmi_fn());



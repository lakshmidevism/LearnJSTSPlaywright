class testRunner {
    static totalTests = 0;
    static passedTests = 0;

    //testName, passes are non static variables, should be accessed with object
    constructor(testName,passed){
        this.testName = testName;
        this.passed = passed;
        testRunner.totalTests++;
        if (passed) {
            testRunner.passedTests++;
        }
    }
}

let t1 = new testRunner("login test", true);
let t2 = new testRunner("signin test", false);
let t3 = new testRunner("register test", true);

console.log(`Total Tests: ${testRunner.totalTests}`);
console.log(`Passed Tests: ${testRunner.passedTests}`);
console.log(t1.testName);
console.log(t2.testName);
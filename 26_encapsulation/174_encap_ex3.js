class Testcase{
    #status = "Not Run";
    static #testCount = 0;

    constructor(name,testCount){
        this.name = name;
        Testcase.#testCount++;
    }

    run(pass){
        this.#status = pass ? "passed" : "failed";
    }
    getStatus(){
        return this.#status;
    }
    static getTestCount(){
        return Testcase.#testCount;
    }
    static setTestCount(count){
        Testcase.#testCount = count;
    }

}

const t1 = new Testcase("Login Test");
t1.run(true);
t1.getStatus();
console.log(t1.getStatus());
Testcase.getTestCount();
Testcase.setTestCount(10);
new Testcase("Register Test");
new Testcase("Logout Test");
console.log(Testcase.getTestCount());
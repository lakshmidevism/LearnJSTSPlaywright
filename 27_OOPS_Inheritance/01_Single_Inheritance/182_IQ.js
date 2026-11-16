class BaseTest{
    constructor(){
        console.log("parent!");
    }
    setUp(){
        console.log("Base: open browser");
    }
    teardown(){
        console.log("Base:close browser");
    }
}

class UITest extends BaseTest{
    constructor(){
        super();
    }
    setUp(){
        super.setUp();
        console.log("UI,maximize window");
    }
    teardown(){
        console.log("UI,take screenshot");
        super.teardown();
    }
}
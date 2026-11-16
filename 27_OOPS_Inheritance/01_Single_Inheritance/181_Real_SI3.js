class BaseTest{
    setUp(){
        console.log("Base:open browser");
    }
}

class ApiTest extends BaseTest{
    setUp(){
        console.log("api setup running");
    }
}
const api_obj = new ApiTest();
api_obj.setUp();
class ApiTest{
    constructor(baseURL){
     this.baseURL = baseURL;
    }

    getApiPath(path){
        return this.baseURL + path;
    }
}

let stagingUrl = new ApiTest("https://staging.example.com");
let prodUrl = new ApiTest("https://prod.example.com");

console.log(stagingUrl.getApiPath("/users"));
console.log(prodUrl.getApiPath("/products"));
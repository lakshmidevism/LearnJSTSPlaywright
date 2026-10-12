let environment = "staging";
let baseUrl = environment == "staging" ? "https://staging.com" : "https://production.com";
console.log(baseUrl);
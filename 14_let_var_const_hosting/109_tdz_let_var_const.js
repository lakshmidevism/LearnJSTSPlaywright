var a = "lakshmi";

if(true){
    console.log(a);
    var a = "temp";
    console.log(a);
}

//let TDZ
// function print(){
//     console.log(a);
//     let a = 10;
// }
// print();


var testName = "login test"; 
var testName = "search test"; // No error, redeclaration allowed
var testName = "logout test";
console.log(testName);

//function hoisting

function printStatusCode(){
    var statusCode;
    console.log(statusCode);
    statusCode = "200";
    console.log(statusCode);
}
printStatusCode();

//typeOf 
var searchName;
console.log(typeof(searchName));
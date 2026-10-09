// Null vs undefined in JS

/* 
null means "no value" or "Empty" which is assigned by the programmer.
undefined means "value is not assigned" or "not defined" which is assigned by the JS itself.
*/

let userName;
console.log(userName); // undefined
console.log(typeof userName); // undefined

function getUserName(){

}

console.log(typeof getUserName()); // undefined

let x;
x = 10;
console.log(x); // 10

let userAge = null;
console.log(userAge); // null
console.log(typeof userAge); // object

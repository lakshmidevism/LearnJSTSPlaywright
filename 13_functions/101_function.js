function getScoreResult(score){
  return score >= 70 ? "pass":"fail";
}

console.log(getScoreResult(45));
console.log(getScoreResult(75));

function sayHello(name){
  console.log("hello" +" " + name);
}

sayHello("lakshmi");

let result = function sayHi(name){
    return `Hello, ${name}!`
}
console.log(result("devi"));

const greet = (name1) => `Hi ${name1}`;

console.log(greet("jishi"));

const greet1 = (score) => {
    if(score >= 75)
    return "pass";
    return "fail";
}
console.log(greet1(50));

const env = () => "staging";

console.log(env());
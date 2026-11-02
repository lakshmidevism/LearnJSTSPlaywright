
//with parameter
function sayHello(name){
  console.log("hello" +" " + name);
}

function getScoreResult(score){
  return score >= 70 ? "pass":"fail";
}

console.log(getScoreResult(45));
console.log(getScoreResult(75));

sayHello("lakshmi");

//function expression using template literal
let result = function sayHi(name){
    return `Hello, ${name}!`
}
console.log(result("devi"));

//single line return is automic, no need to write
const greet = (name1) => `Hi ${name1}`;
console.log(greet("jishi"));

//multi line, need return
const greet1 = (score) => {
    if(score >= 75)
    return "pass";
    return "fail";
}
console.log(greet1(50));

//empty parenthesis
const env = () => "staging";
console.log(env());
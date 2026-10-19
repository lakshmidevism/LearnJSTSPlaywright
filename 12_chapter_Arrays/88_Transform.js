let scores = [45,82,31,67,90];

let grades = scores.map(i => i > 70 ?"pass": "fail");

console.log(grades);  

let passing = scores.filter(s => s > 70);

console.log(passing);
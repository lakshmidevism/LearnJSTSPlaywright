// problem - statement 
//scrore 0 to 100
// score > 90 - A
//score 80 to 90 -> B
//score 70 to 80 -> C
//score 60 to 70 -> D
//score 50 - 60 -> E  
//score < 50 -> F

let score = 35;
let grade = "";

if(score > 100 || score < 0){
    console.log("invalid score");
} else {
 if(score > 90) {
    console.log(" Grade A - Excellent");
 } else if(score > 80) {
    grade = 'B';
    console.log("Grade B - good");
 }else if(score > 70 && score < 80) {
    console.log(" Grade C - Okay");
 }else if(score > 60 && grade < 70){
   console.log("Grade D - not good");
 } else {
   console.log("Grade F - fail");
 }
}
 


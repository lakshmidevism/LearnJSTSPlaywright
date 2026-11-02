var a = 10;
console.log(a);

//function scope
function print(a){
    console.log("learning js");
   var a = 20;
    console.log(a);
    if(true){
    var a = 30;
    } 
    console.log(a); 
}


print(a);

console.log(a);
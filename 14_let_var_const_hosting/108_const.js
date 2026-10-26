const env = "prod";

console.log(env);
// block scope 
//variables with same name can be declared inside the function
function print(){
    console.log("const here");
   const env = "stage";
    console.log(env);
    if(true){
        const env = "dev";
    }
    console.log(env); // stage
}

print();
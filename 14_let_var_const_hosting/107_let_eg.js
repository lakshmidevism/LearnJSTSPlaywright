let b = 20;

console.log(b);

// let is block scope
function print(){
    console.log("let example here");
    let b = 30;
    if(true){
        let c = 40;
    }
    console.log(b);
}

print();
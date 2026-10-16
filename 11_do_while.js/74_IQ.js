//difference of while and do while loop
// while loop will check the condition first and then execute the code block if the condition is true. If the condition is false, the code block will not be executed at all.
let a = 10;
while(a < 10){
    console.log(a);
    a++;
}

// do while loop will execute the code block first and then check the condition. If the condition is true, it will continue to execute the code block. If the condition is false, it will stop executing the code block.
let b = 10;
do {
    console.log(b);
    b++;
} while(b < 10);

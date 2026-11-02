let n = 3;

for(let i = 0; i <= n; i++){
    let row = "";
    for(let j = 0; j < n - i; j++){
        row += " ";
    }
    for(let k = 0; k < 2 * i - 1; k++){
        row += "*";
    }
    console.log(row);
}
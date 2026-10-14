let statusExample = 0;
console.log(typeof statusExample);
switch (statusExample) { // // === Strict, value and data type both of them shoul be same.
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}
let testMatrix = [

    ["login", "pass", 200],

    ["checkout", "fail", 404],

    ["search", "pass", 180]

];


console.log(testMatrix[0][0]); // "login"
console.log(testMatrix.length); // 3
console.log(testMatrix[0].length); // 3

for (let row of testMatrix) {

    for (let cell of row) {

        process.stdout.write(cell + " ");

    }

    console.log();

}

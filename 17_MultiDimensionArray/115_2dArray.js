let grid = [
    [40,50,60],
    [70,80,90],
];

console.log(grid[0][0]); // 40
console.log(grid.length); //length of rowas
console.log(grid[0].length); //length of columns

let testMatrix = [

    ["login", "pass", 200],

    ["checkout", "fail", 404],

    ["search", "pass", 180]

];

for (let row of testMatrix) {

    for (let cell of row) {

        process.stdout.write(cell + " ");

    }

    console.log();

}

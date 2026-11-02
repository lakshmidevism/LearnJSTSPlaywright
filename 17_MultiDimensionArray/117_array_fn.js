let score = [
    [40,50,60],
    [70,80,90],
    [100,110,120]
]

let result = score.map(row => row.reduce((a,b)=> a+b,0));
console.log(result); // [150, 240, 330]
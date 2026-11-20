interface Point {
    x:number;
    y:number;
}

const point1: Point = {
    x : 20,
    y : 21,
}

console.log(point1);

point1.x = 15;

console.log(point1.x);

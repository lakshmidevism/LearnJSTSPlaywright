interface Point1 {
   readonly x1:number;
   readonly y1:number;
}

const point2: Point1 = {
    x1 : 20,
    y1: 21,
}

console.log(point2);

 // point2.x1 = 23; // not possible 
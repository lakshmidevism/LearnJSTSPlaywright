const arr = [10,20,30,40,50,90];

let max = Math.max(...arr);

console.log("finding using spread operator" + " " + max);

let anotherMax = arr.length ? arr.reduce((a,b) => Math.max(a,b) , -Infinity) : null;

console.log("finding using reduce method" + " " + anotherMax);

let max1 = arr[0];
for(let i=1;i<arr.length;i++){

    if(arr[i] > max1)
    {
        max1 = arr[i] ;
    }
}
console.log("finding using normal for loop" + " " + max1);
const arr = [10, 20, 30, 40];

arr.push(50); // adds 50 to the end of the array
console.log(arr); // [10, 20, 30, 40, 50]
console.log(arr.length); // 5

arr.pop();
console.log(arr); // [10, 20, 30, 40]
console.log(arr.length); // 4

arr.unshift(0); // adds 0 to the beginning of the array
console.log(arr); // [0, 10, 20, 30, 40]
console.log(arr.length); // 5       

arr.shift(0);
console.log(arr); // [10, 20, 30, 40]

arr.splice(1, 2); // removes 2 elements starting from index 1
console.log(arr);   
const num = [10, 20, 30, 40, 50];

let result = num.find(temp => temp > 20);

console.log(result); // 30

let index = num.findIndex(temp => temp > 20);

console.log(index);

let lastIndex = num.findLastIndex(temp => temp > 20);

console.log(lastIndex); 

let last = num.findLast(temp => temp > 30);

console.log(last);

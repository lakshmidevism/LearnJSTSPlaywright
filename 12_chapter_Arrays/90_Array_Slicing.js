const nums = [1,2,3,4];

// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically take from start to end.

nums.slice[2,3];

console.log(nums);

console.log(nums.slice(2));
console.log(nums.slice(-2));
console.log(nums.slice(0));
console.log(nums.slice(-5));
console.log(nums.slice(-3,-5)); // goes in reverse direction, as slice moves only in forward direction, gives empty array
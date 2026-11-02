let nums = [10,1,2,21];
nums.sort( (a,b) => a-b); // need to use this for proper number sorting
console.log(nums);
nums.sort((a,b) => b-a);

const fruits = ["Mango", "apple", "banana", "cherry"];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits);
const num = [1,2,3,4];

const copy1 = [...num]; // spread operator creates new array

console.log(num);
console.log(copy1);

 const copy2 = num.slice(); //slice also creates new array

 copy2.push(5);
 copy1.push(6);

 console.log(num);
 console.log(copy1);
 console.log(copy2);

 let deep_copy_array = num;
 deep_copy_array.push(7);
 console.log(num);
 console.log(deep_copy_array);




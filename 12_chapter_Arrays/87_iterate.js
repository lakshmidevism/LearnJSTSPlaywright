const arr = ["LOGIN", "SEARCH", "CHECKOUT"];

for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let i of arr){
    console.log(i);
}

arr.forEach((value, index) => {
    console.log(value, index);
});

for(let i in arr){
    console.log(i, arr[i]);
}

for(let [test,i] of arr.entries()){
    console.log(test,i);
}
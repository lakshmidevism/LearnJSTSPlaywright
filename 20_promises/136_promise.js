let apicall = new Promise(function(resolve,reject){
    resolve({status:200,text:success});
})

apicall.then(function(response){
    console.log(response.status);
})

let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
});
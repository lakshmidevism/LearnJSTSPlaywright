let apicall = new Promise(function(resolve,reject){
   reject("error");
})

apicall.then(function(response){
    console.log(response.status);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("I will run always");
})
let checkAuth = Promise.resolve("auth checking");
let getUserDetails = Promise.resolve("user details retrieved");
let checkDB = Promise.resolve("DB checked");

Promise.all([checkAuth, getUUserDetails, checkDB]).then(function(msg){
    console.log(msg);
})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });
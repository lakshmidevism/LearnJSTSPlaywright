let testResults = ["pass", "fail", "pass", "pass", "fail"];

testResults.forEach(function(result,index){
    console.log(`Test ${index+1}: ${result}`);
});
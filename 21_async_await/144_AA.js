 function getTestResults(){
    return new Promise(function(resolve){
        resolve({status:200, text:"success"});
    });
}

async function runTest(){
    let results = await getTestResults();
    console.log("Results:", results);
}

runTest();

async function apiRequest(){
    try{
        let result = await Promise.reject("503 service unavailable");
    }catch(error){
        console.log("Error:", error);
    }
}

apiRequest();

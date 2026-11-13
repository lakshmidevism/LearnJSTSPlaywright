function apiRequest(){
    return new Promise(function(resolve){
        resolve({status:200, text:"success"});
    })
}

async function runApiRequest(){
    let response = await apiRequest();
    console.log("Response:", response.status);
}

runApiRequest();
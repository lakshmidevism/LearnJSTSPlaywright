let result = (statusCode) => {
  if(statusCode >= 200 && statusCode <=300)
    return "success";
else if(statusCode >= 300 && statusCode >= 400)
    return "client error";
else if(statusCode >=500)
    return "server error";
}


console.log(result(404));
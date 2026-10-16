let retry = 0;
do {
    console.log("executing the code");
    console.log("retrying.. " + retry);
    retry++;
}while(retry < 5);
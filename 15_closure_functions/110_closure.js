function startBrowser(){
    let name = "edge";

    function installBrowser(){
        console.log(`installing ${name} here`);
    }
    return installBrowser;
}

const runTc = startBrowser();
runTc();
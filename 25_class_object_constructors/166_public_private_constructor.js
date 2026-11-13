class Browser{
    constructor(name){
        this.name = name;
       this.launched = true;
       console.log(name + "is launched");
    }

    startBrowser(){
        console.log("browser started");
    }

    closeBrowser(){
        console.log("browser closed");
    }
}

let chrome = new Browser("chrome");
let firefox = new Browser("firefox");
chrome.startBrowser();
firefox.closeBrowser();
console.log(chrome.launched);
const browsers = ["chrome", "firefox", "safari", "edge", "opera"];

browsers.shift();

for(let i =0;i<browsers.length;i++){
    if(browsers[i] === "opera"){
      console.log("opera is not supported");
    }
}

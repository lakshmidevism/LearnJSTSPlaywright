const browsers = ["chrome", "firefox", "safari", "edge", "opera"];
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers[-1]);
//at supports negative indexing, but browsers[-1] will return undefined because negative indexing is not supported in standard array access.

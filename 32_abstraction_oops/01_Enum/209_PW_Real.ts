enum Browsers {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}
function launchBrowser(browser: Browsers): void {
    switch (browser) {
        case Browsers.Chrome:
            console.log("Launching Chromium (Chrome v120)");
            break;
        case Browsers.Firefox:
            console.log("Launching Gecko (Firefox v115)");
            break;
        case Browsers.Safari:
            console.log("Launching WebKit (Safari v17)");
            break;
        case Browsers.Edge:
            console.log("Launching Chromium (Edge v120)");
            break;
    }
}

launchBrowser(Browsers.Chrome);
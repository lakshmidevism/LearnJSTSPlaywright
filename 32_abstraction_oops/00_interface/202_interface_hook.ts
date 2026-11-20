interface TestHook {
    (testName:string) :void ;
}

let beforeEachHook : TestHook = function(testName:string):void{
    console.log("[BEFORE" , "starting");
}

let afterHook :TestHook = function(testName:string):void {
 console.log("[After] finishing");
}
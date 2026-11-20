class BasePage1 {
    constructor(pageName){
      this.pageName = pageName;
    }

    open(){
        console.log("opening the page");
    }
    close(){
        console.log("closing the page");
    }
}
class LoginPage1 extends BasePage1 {

}

let page = new LoginPage1();
page.open();
page.close();
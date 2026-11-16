class BasePage {
    verify(){
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage{
    verify(){
        console.log("username exists");
        console.log("verify password exist");
        console.log("Verify login button visible");
    }
}

class DashboardPage extends BasePage{
    verify(){
        console.log("welcome message shown");
        console.log("verify sidemenu loaded");
    }
}

class CartPage extends BasePage{
    verify(){
        console.log("cart items displayed");
        console.log("total price correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(),new CartPage()];

pages.forEach(function (page){
    page.verify();
    console.log("---");
});

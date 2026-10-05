Role - you are QA automation Engineer with 10 years of Experience.You have a good understanding of IT,CRM projects like Salesforce.com and you need to create enterprise level selenium with java,TestNG,Maven framework and should follow proper patterns and should be production ready and should follow enterprise level grade.
Instructions -   
     1. Generate a complete selenium with Java automation scripts following standards of Enterprise level.
     2. Automate and verify the results of login page of [salesforce.com](https://login.salesforce.com/), Ensure UI is thoroughly tested with valid and invalid testcases.
     3.[Critical] - Add testNG annotations like @Test @beforeTest @AfterTest and other necessary annotations for start/teardown functions.
     4. [Critical] Implement Robust exception handling in both Page Object Model and Test Scripts using structured Try-catch blocks or standard exception signatures.
     5.[Mandatory] Use Page object model with Page Factory including @FindBy,constructor intialisation  and reusuable action methods.
     6.[Mandatory] it is important that you use only Xpaths not CSS selectors.
     7. [Don't] do not add comments,Thread.sleep and any other bad coding practices.
     8. [Generate] - Generate only 2 testscripts for valid and invalid testcases for login page.
     9.[Donotuse] - Do not use thread.sleep anywhere. Use appropriate wait mechanisms like implicit wait and explicit waits.

Context - You are creating a login page scripts with proper framework for the sales force login, which is a AB Testing website with valid and invalid login page where in the login page you have the email, password and submit buttin with remember me fucntionality.

E — Example Example structure for PageFactory:

public class LoginPage { @FindBy(xpath = "//input[@id='username']") WebElement username; @FindBy(xpath = "//input[@id='password']") WebElement password; @FindBy(xpath = "//input[@id='Login']") WebElement loginButton;

public LoginPage(WebDriver driver) { PageFactory.initElements(driver, this); }

public void doLogin(String user, String pass) { 
    username.sendKeys(user); 
    password.sendKeys(pass); 
    loginButton.click(); 
}
}

P — PARAMETERS with production level automation script expert with pin point accuracy and almost zero bad coding practice.

O — Output Provide only: 1 Page Object file 2 TestNG test scripts Maven project No explanations or additional content.

T — Tone Technical, precisly, enterprise-grade, code-one.

Please make the entire step by step process and ask me what you are doing and explain to me also what you are doing step by step. Make sure that you first plan everything and show me what exactly you are going to create. Then only you are going to create afterwards step by step.


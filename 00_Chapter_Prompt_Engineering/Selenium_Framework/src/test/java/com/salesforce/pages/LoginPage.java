package com.salesforce.pages;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//div[contains(@class,'error') and contains(normalize-space(.),'Please check your username and password')] | //div[contains(@class,'error')]")
    private WebElement loginError;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        PageFactory.initElements(driver, this);
    }

    public void open() {
        driver.get("https://login.salesforce.com/");
        wait.until(ExpectedConditions.visibilityOf(username));
    }

    public void login(String usernameValue, String passwordValue) {
        wait.until(ExpectedConditions.visibilityOf(username));
        username.clear();
        username.sendKeys(usernameValue);
        password.clear();
        password.sendKeys(passwordValue);
        wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
    }

    public boolean isLoginErrorDisplayed() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(loginError)).isDisplayed();
        } catch (Exception exception) {
            return false;
        }
    }
}

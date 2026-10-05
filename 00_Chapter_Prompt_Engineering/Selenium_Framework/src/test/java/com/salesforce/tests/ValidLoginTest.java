package com.salesforce.tests;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.salesforce.pages.LoginPage;

import io.github.bonigarcia.wdm.WebDriverManager;

public class ValidLoginTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeTest
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        loginPage = new LoginPage(driver);
        loginPage.open();
    }

    @Test
    public void validLoginTest() {
        String username = System.getProperty("valid.username");
        String password = System.getProperty("valid.password");

        Assert.assertNotNull(username, "Property valid.username is required");
        Assert.assertNotNull(password, "Property valid.password is required");

        loginPage.login(username, password);
        Assert.assertFalse(loginPage.isLoginErrorDisplayed(), "Valid user login should not show an error");
    }

    @AfterTest
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}

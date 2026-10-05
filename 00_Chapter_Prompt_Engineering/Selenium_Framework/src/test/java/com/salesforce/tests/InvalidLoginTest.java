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

public class InvalidLoginTest {
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
    public void invalidLoginTest() {
        loginPage.login("invaliduser@example.com", "WrongPassword123");
        Assert.assertTrue(loginPage.isLoginErrorDisplayed(), "Invalid credentials should show login error");
    }

    @AfterTest
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}

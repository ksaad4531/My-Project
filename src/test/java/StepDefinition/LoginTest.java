package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginTest {
	WebDriver driver;
	
	@Given("^I open chrome browser$")
	public void i_open_chrome_browser(){
	System.setProperty("webdriver.chrome.driver", "/Users/swaggykhan/Desktop/Drivers/chromedriver");
	driver = new ChromeDriver();
	}

	@Given("^I go to salesforce home page$")
	public void i_go_to_salesforce_home_page(){
		driver.get("https://login.salesforce.com");
	}

	@Given("^I enter username$")
	public void i_enter_username(){
		driver.findElement(By.id("username")).sendKeys("test.user@gmail.com.test");

	}

	@Given("^I enter password$")
	public void i_enter_password(){
		driver.findElement(By.id("password")).sendKeys("Welcome1");

	}

	@When("^I click the login button$")
	public void i_click_the_login_button(){
		driver.findElement(By.id("Login")).click();

	}

	@Then("^I see the dashboard$")
	public void i_see_the_dashboard(){
		boolean isNamePresent = driver.findElement(By.linkText("test user")).isDisplayed();
		Assert.assertTrue(isNamePresent);
		

	}
	@Given("^I enter invalid username$")
	public void i_enter_invalid_username(){
		
		driver.findElement(By.id("username")).sendKeys("Fake@gmail.com");

	}

	@Given("^I enter in valid password$")
	public void i_enter_in_valid_password(){
		
		driver.findElement(By.id("password")).sendKeys("Hello");

	}


}

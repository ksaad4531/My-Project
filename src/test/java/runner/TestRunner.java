package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "feature",
		glue = "StepDefinition",
		monochrome = true,
				 plugin = {
						 "pretty",
						 "html:target/cucumber-reports",
						 "json:target/json-report.json",
				 		 "rerun:rerun/failed_scenario.txt"
						 },
		strict=false)

public class TestRunner {
	

}

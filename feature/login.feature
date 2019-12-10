

Feature: Test Salesforce login functionality
  I want to use this feature file to test the login functionality of our salesforce application

  
  Scenario: login using valid credential
    Given I open chrome browser
    And I go to salesforce home page
    And I enter username
    And I enter password 
    When I click the login button
    Then I see the dashboard
    
    
   
      Scenario: login using invalid credential
    Given I open chrome browser
    And I go to salesforce home page
    And I enter invalid username
    And I enter in valid password 
    When I click the login button
    Then I see the dashboard
 
    


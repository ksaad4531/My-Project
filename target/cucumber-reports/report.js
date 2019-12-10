$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "Test Salesforce login functionality",
  "description": "I want to use this feature file to test the login functionality of our salesforce application",
  "id": "test-salesforce-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "login using valid credential",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 3515776947,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 750308129,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_username()"
});
formatter.result({
  "duration": 1289547994,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_password()"
});
formatter.result({
  "duration": 688888355,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 953273621,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_see_the_dashboard()"
});
formatter.result({
  "duration": 1841072791,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "login using invalid credential",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-invalid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter invalid username",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter in valid password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 2338116761,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 844007830,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_invalid_username()"
});
formatter.result({
  "duration": 1091248963,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_in_valid_password()"
});
formatter.result({
  "duration": 820843258,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 343633856,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_see_the_dashboard()"
});
formatter.result({
  "duration": 205001758,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"test user\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air.local\u0027, ip: \u00272601:144:103:31b0:dd14:50e9:a066:597b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/g3/ypccm8y576d...}, goog:chromeOptions: {debuggerAddress: localhost:58011}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 57607bd95de1d1c48085bfd48cbaa2c0\n*** Element info: {Using\u003dlink text, value\u003dtest user}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.LoginTest.i_see_the_dashboard(LoginTest.java:46)\n\tat ✽.Then I see the dashboard(login.feature:23)\n",
  "status": "failed"
});
});
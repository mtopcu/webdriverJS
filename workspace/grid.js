var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
usingServer('http://localhost:4444/wd/hub').
withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://sonymobile.com/gb');

driver.getTitle().then(function(title){
	console.log('The page title is ->',title);
});

driver.sleep(5000);
driver.quit();
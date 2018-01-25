var webdriver = require('selenium-webdriver'); 
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.phantomjs()).build();

driver.get('https://sonymobile.com/gb');
driver.getTitle().then(function(title){
	console.log(title);
});
driver.quit();
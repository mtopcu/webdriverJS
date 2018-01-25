var webdriver = require('selenium-webdriver');
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder().
usingServer('http://hub:4444/wd/hub').
withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://testpress:80');

driver.getTitle().then(function(title){
	console.log('The page title is ->',title);
});

driver.findElement(By.id('language-continue')).click();



driver.sleep(10000);
driver.quit();
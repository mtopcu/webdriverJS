var webdriver = require('selenium-webdriver'),
assert = require('assert');

By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://www.sonymobile.com/tr');

driver.getTitle().then(function(title){
	try {
	assert.equal(title, "Resmi Xperia™ Web Sitesi - Sony Mobile (Türkiye)");
		}
	catch(e) {
	console.error('Title Issue');
	driver.close();
		}

});

driver.quit();
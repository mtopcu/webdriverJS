var webdriver = require('selenium-webdriver'), 
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('https://www.trendyol.com/Butik/Liste/Kadin');

driver.findElements(By.className('bigBoutiqueImage')).then(function(allImgElts){

var i=5;


console.log("Big Image Count is:", allImgElts.length);
driver.findElement(By.id('item'+i)).click();

driver.getTitle().then(function(title){
	console.log('The page title is ->',title);
});

	});

driver.quit();
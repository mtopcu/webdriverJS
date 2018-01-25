var webdriver = require('selenium-webdriver');
var assert = require('assert');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();


// go to sonymobile.com 
driver.get('https://www.sonymobile.com/tr');


// check the page title
driver.getTitle().then(function(title){
   assert.equal(title, "Resmî Xperia™ Web Sitesi - Sony Mobile (Türkiye)");
   console.log('> Title is correct!');
   console.log('>',title, '\n');
  	});
 
 // finish the test                           
driver.sleep(7000);
driver.quit();


/*
// click the Phones item 
driver.findElement(By.xpath('//*[@id="menu-primary-menu"]/li[1]')).click();

// wait until loading tab menu
driver.wait(until.elementLocated(By.xpath('//*[@id="page-main-content"]/div[1]/div')), 10000);

// check the current URL
driver.getCurrentUrl().then(function(url){ 
     assert.equal(url, "https://www.sonymobile.com/tr/products/phones/");
     console.log('> Current URL is correct !');
              });
*/
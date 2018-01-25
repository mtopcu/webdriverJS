var assert = require('assert'),
webdriver = require('selenium-webdriver'),
By = webdriver.By,
test = require('selenium-webdriver/testing');
 
test.describe("Sony Mobile WebdriverJS Mocha Test", function() {
      
      this.timeout(30000);
      
      var driver;
      
      test.before(function() {
      driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        });

      test.after(function() {
      driver.quit();
        });

  test.it("I open the Sony Mobile Turkey", function() {
      driver.get('https://www.sonymobile.com/tr');
        });
   
  test.it("Title is 'Resmi Xperia™ Web Sitesi - Sony Mobile (Türkiye)'", function(){
      driver.getTitle().then(function(title){
      assert.equal(title, "Resmi Xperia™ Web Sitesi - Sony Mobile (Türkiye)");           
              });
        });

 });


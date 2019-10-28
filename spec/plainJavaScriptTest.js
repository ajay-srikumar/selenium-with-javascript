
// To run the test, node <fileNane.js>
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
 

// browser.get('http://en.wikipedia.org/wiki/Wiki');
// browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(){
//     browser.findElement(webdriver.By.linkText('Contents')).click().then(function(){
//         browser.findElement(webdriver.By.linkText('About Wikipedia')).click().then(function(){
//             browser.quit();
//         });
//     });
// });

browser.controlFlow.execute(function() { 
    var driver = new webdriver.Builder().build(); 
    driver.get("http://www.google.com"); 
 }); 
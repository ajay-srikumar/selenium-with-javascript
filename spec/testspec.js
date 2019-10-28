var webdriver = require('selenium-webdriver');
var browser;
describe('Selenium Tutorial', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

        browser.get('https://en.wikipedia.org/').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        browser.quit().then(done);
    });

    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Should be on the home page', function(done) {
        var element = browser.findElement(webdriver.By.tagName('body'));

        browser.getCurrentUrl().then(function(value) {
            expect(value).toContain('Main_Page');
            done();
        });
    });
        
    // Test the navigation bar by clicking on the 'REVIEW' link and checking the URL changes to '/review'
    it('Has a working nav', function(done) {

        browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(){
            browser.findElement(webdriver.By.linkText('Contents')).click().then(function(){
                browser.findElement(webdriver.By.linkText('About Wikipedia')).click().then(function(){
                    browser.findElement(webdriver.By.linkText('Main page')).click().then(function(){
                    //  browser.quit();
                    done();
                    });
                });
            });
        });

    });
});
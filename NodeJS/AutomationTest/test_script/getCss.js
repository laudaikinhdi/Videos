describe("API command", function(){
    it("Get Css", function(){
        browser.url("http://the-internet.herokuapp.com/javascript_alerts");
        const ALERT_JS = '[onclick="jsAlert()"]';
        const result = '#result';
        browser.waitForVisible(ALERT_JS, 30000);
        $(ALERT_JS).click()
        browser.waitForVisible(result, 30000);
        $(result).getCssProperty('color');
        browser.pause(3000);
    });
});
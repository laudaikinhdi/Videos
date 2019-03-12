describe("API command", function(){
    const ALERT_JS = '[onclick="jsAlert()"]';
    const ALERT_Dismiss = '[onclick="jsConfirm()"]';
    it("Alert Accept", function(){
        browser.url("http://the-internet.herokuapp.com/javascript_alerts");
        browser.waitForVisible(ALERT_JS, 10000);
        $(ALERT_JS).click();
        browser.alertAccept();
        let getText = $('#result').getText();
        console.log(getText);
        browser.pause(3000);
    });
    it("Alert Dismiss", function(){
        browser.waitForVisible(ALERT_Dismiss, 10000);
        $(ALERT_Dismiss).click();
        browser.alertDismiss();
        browser.pause(3000);
    });
    it("Alert Text", function(){
        browser.waitForVisible(ALERT_JS, 10000);
        $(ALERT_Dismiss).click();
        let content = browser.alertText();
        console.log(content);
        browser.pause(3000);
    });
});
describe('API command', function(){
    const DROPDOWN = '#dropdown';
    it('select by visible text', function(){
        browser.url("http://the-internet.herokuapp.com/dropdown");
        browser.waitForVisible(DROPDOWN, 10000);
        $(DROPDOWN).selectByVisibleText("Option 1");
        // $(DROPDOWN).getText('option:checked');

        browser.pause(2000);
    });
    it('select by value ', function(){
        $(DROPDOWN).selectByValue('2');
        browser.pause(2000);
        // $(DROPDOWN).getValue();
    });
    it('select by index ', function(){
        $(DROPDOWN).selectByIndex(0);
        $(DROPDOWN).getValue();
        browser.pause(2000);
    });
});
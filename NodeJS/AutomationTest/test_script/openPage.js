describe('API command', function(){
    it('Open Page API', function(){
        browser.url('https://google.com');
        // browser.pause(3000); // milliseconds

        // $('#lst-ib').setValue("Automation Test");
        browser.waitForVisible('#lst-ib',3000);
        browser.setValue('#lst-ib', 'Automation Test');
        // browser.pause(2000);
    });
});
describe("Comman API", function(){
    it("tab", function(){
        browser.url("http://webdriver.io/api.html");
        const link = '=Improve this doc';
        browser.waitForVisible(link, 30000);
        $(link).click();

        let tabIds = browser.getTabIds();

        console.log(tabIds);

        let title_1 = browser.getTitle();
        console.log(title_1);
        
        browser.switchTab(tabIds[1]);

        let title_2 = browser.getTitle();
        console.log(title_2);
    });
});
describe("API command", function(){
    it("Get url and title", function(){
        browser.url("http://webdriver.io/api/property/getElementSize.html");

        let url = browser.getUrl();
        let title = browser.getTitle();
        console.log(url, title);
    });
}); 
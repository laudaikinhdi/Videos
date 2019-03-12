describe("API commd", function(){
    it("save screen shot", function(){
        browser.url("http://the-internet.herokuapp.com/tables");

        browser.saveScreenshot("./screenshot.png");
    })
});
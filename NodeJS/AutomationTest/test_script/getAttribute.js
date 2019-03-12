describe("API command", function(){
    it("Get Attribute", function(){
        browser.url("http://the-internet.herokuapp.com/login");
        const form = '#login';

        browser.waitForVisible(form, 30000);
        let attr = $(form).getAttribute('method');
        console.log(attr);
    });
});
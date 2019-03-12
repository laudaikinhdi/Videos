describe("API command", function(){
    it("Get element size", function(){
        browser.url("http://the-internet.herokuapp.com/login");
        const form = '#login';
        browser.waitForVisible(form, 30000);
        let getSize = $(form).getElementSize();
        console.log("Size: ",getSize);
        console.log(getSize.width, getSize.height);
    });
});
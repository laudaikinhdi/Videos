describe("API command", function(){
    it("file upload", function(){
        browser.url("http://the-internet.herokuapp.com/upload");
        const btnSubmit = '#file-submit';
        const fileUpload = '#file-upload';

        browser.waitForVisible(fileUpload, 30000);
        browser.chooseFile(fileUpload, "./test_script/Alert.js");

        browser.waitForVisible(btnSubmit, 30000);
        $(btnSubmit).click();
        browser.pause(3000);
    });
})
describe('API command', function(){
    it('Login form', function(){
        browser.url("https://the-internet.herokuapp.com/login");
        const username = '#username';
        const password = '#password';
        const btnClick = '[type="submit"]';
        browser.waitForVisible(username, 10000);
        $(username).setValue('tomsmith');

        browser.waitForVisible(password, 10000);
        $(password).setValue('SuperSecretPassword!');

        // browser.waitForVisible(btnClick, 10000);
        // $(btnClick).click();
        // browser.pause(3000);
        const LOGIN_FORM = '#login';
        $(LOGIN_FORM).submitForm();

        browser.pause(3000);
    });
});
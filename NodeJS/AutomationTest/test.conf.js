exports.config = {
    maxInstances: 10, // chạy song song tset script 1
    specs: [
        './test_script/LoginForm.js'
    ],
    host: 'localhost',
    port: 4444,
    // path: '/',
    capabilities: [
        {
            browserName: 'chrome',

        }
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    logLevel: 'verbose',
    // java -Dwebdriver.chrome.driver="F:\Download\chromedriver.exe"  
    // -jar selenium-server-standalone-3.14.0.jar -role node -hub http://localhost:4444/grid/register
};
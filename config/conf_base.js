const env = require('./environment');

// conf_base.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [{
        browserName: 'chrome'
    }],

    baseUrl: env.baseUrl
};

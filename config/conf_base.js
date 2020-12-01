const env = require('./environment');

// conf_base.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: env.capabilities,
    baseUrl: env.baseUrl
};

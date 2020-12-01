const servers = require('./servers.json');

module.exports = {
    seleniumAddress: (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                'show-fps-counter=true',
                '--window-size=1920,1080'
            ]
        }
    },
    baseUrl: servers.env_production.host1
};

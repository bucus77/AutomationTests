const servers = require('./servers.json');

module.exports = {
    seleniumAddress: (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true','enable-automation'],
            'loggingPrefs': {
                'driver': 'WARNING',
                'browser': 'OFF' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
            }
        }
    },
    firefoxCapabilities: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
            'args': ['--safe-mode']
        }
    },
    baseUrl: servers.env_production.host1
};

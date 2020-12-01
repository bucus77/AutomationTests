const base = require('./conf_base');
const mainPageConfig = base.config;

mainPageConfig.suites = {
    specs: '../spec/MainPage/*'
};

exports.config = mainPageConfig;

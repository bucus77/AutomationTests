const base = require('./conf_base');
const config = base.config;

config.suites = {
    specs: '../spec/*'
};

exports.config = config;

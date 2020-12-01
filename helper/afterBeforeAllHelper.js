const consoleLogHelper = require('../helper/console.LogHelper');

class afterBeforeAllHelper {
    /**
     * This method is using to preapre tests
     * @returns {Promise<void>}
     */
    async beforeAllHelper(testNumber) {
        browser.ignoreSynchronization = true;
        await consoleLogHelper.beforeAllCL(testNumber);
        await browser.get(browser.baseUrl);
    }

    /**
     * This method is using to preapre tests
     * @returns {Promise<void>}
     */
    async afterAllHelper(testNumber) {
        await consoleLogHelper.afterAllCL(testNumber);
    }


}

module.exports = new afterBeforeAllHelper();

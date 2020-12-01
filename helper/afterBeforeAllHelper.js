const consoleLogHelper = require('../helper/console.LogHelper');

class afterBeforeAllHelper {
    /**
     * This method is using to log before all
     * @returns {Promise<void>}
     */
    async beforeAllHelper() {
        browser.ignoreSynchronization = true;

        await browser.get(browser.baseUrl);
    }

    /**
     * This method is using to log before each it
     * @returns {Promise<void>}
     */
    async beforeEachHelper(testNumber){
        await consoleLogHelper.beforeEachCL(testNumber);
    }

    /**
     * This method is using to log after each it
     * @returns {Promise<void>}
     */
    async afterEachHelper(testNumber){
        await consoleLogHelper.afterEachCL(testNumber);
    }

    /**
     * This method is using to log after all
     * @returns {Promise<void>}
     */
    async afterAllHelper() {
        await consoleLogHelper.afterAllCL('REPORT COMPLETED');
    }


}

module.exports = new afterBeforeAllHelper();

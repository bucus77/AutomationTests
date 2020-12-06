global.redFont = '\x1b[31m';
global.greenFont = '\x1b[32m';
global.whiteFont = '\x1b[37m';

class consoleLogHelper {
    /**
     * his method writes a start log in console
     * @returns {Promise<void>}
     */
    async beforeAllCL() {
        console.log(`REPORT START`);
    }

    /**
     * his method writes a start log in console
     * @returns {Promise<void>}
     */
    async beforeEachCL(testNumber) {
        console.log(`${testNumber} | REPORT | START`);
    }

    /**
     * This method writes a finish log in console
     * @returns {Promise<void>}
     */
    async afterEachCL(testNumber) {
        console.log(`${testNumber} | REPORT | COMPLETED`);
    }

    /**
     * This method writes a finish log in console
     * @returns {Promise<void>}
     */
    async afterAllCL(testNumber) {
        console.log(`REPORT COMPLETED`);
    }

    /**
     * The method inform about result of a comparing expected and actual data
     * @param expected - expected data
     * @param actual - reeded data
     * @param message - info about expected data
     */
    areEqualAssertionLog(expected, actual, message) {
        actual === expected ?
            console.log(greenFont, `${global.testNumber} | OUTPUT | EXPECTED: ${message} to be ${expected} | ACTUAL: ${actual} | OK`, whiteFont) :
            console.log(redFont, `${global.testNumber} | OUTPUT | EXPECTED: ${message} to be ${expected} | ACTUAL: ${actual} | FAILED`, whiteFont);
    }

    /**
     * The method inform about result of a comparing expected and actual data
     * @param expected - expected data
     * @param actual - reeded data
     * @param message - info about expected data
     */
    isElementInListAssertionLog(expected, actual, message) {
        expected.includes(actual) ?
            console.log(greenFont, `${global.testNumber} | OUTPUT | EXPECTED: ${message} is in list | ACTUAL: ${actual} | OK`, whiteFont) :
            console.log(redFont, `${global.testNumber} | OUTPUT | EXPECTED: ${message} is in list| ACTUAL: ${actual} | FAILED`, whiteFont);
    }

    /**
     * Methods inform if expected data are correct if are not correct
     * @param actual - checked data
     * @param message - info about expected data
     */
    isTrueAssertionLog(actual, message) {
        actual === true ?
            console.log(greenFont, `${global.testNumber} | OUTPUT | ELEMENT: ${message} is displayed | OK`, whiteFont) :
            console.log(redFont, `${global.testNumber} | OUTPUT | ELEMENT: ${message} is displayed| FAILED`, whiteFont);
    }
}

module.exports = new consoleLogHelper();

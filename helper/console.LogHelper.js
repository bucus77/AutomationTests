global.redFont = '\x1b[31m';
global.greenFont = '\x1b[32m';
global.whiteFont = '\x1b[37m';

class consoleLogHelper {
    /**
     * his method writes a start log in console
     * @returns {Promise<void>}
     */
    async beforeAllCL(testNumber) {
        console.log(`${testNumber} | REPORT |START`);
    }

    /**
     * This method writes a finish log in console
     * @returns {Promise<void>}
     */
    async afterAllCL(testNumber) {
        console.log(`${testNumber} | REPORT |COMPLETED`);
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
}

module.exports = new consoleLogHelper();

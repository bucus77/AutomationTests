const consoleLogHelper = require('./console.LogHelper');

class basicHelper {
    /**
     * The method compares types of elements
     * @param expected - expected data
     * @param actual - actual data
     * @param message - message when unexpected data
     * @returns true if types of elements are the same
     */
    isEqualLiteral(expected, actual, message) {
        consoleLogHelper.areEqualAssertionLog(expected, actual, message);
        return expected === actual;
    }
}

module.exports = new basicHelper();

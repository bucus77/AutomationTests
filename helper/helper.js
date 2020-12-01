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

    /**
     * The method cheks that elements is on expected List
     * @param expected - expected data
     * @param actual - actual data
     * @param message - message when unexpected data
     * @returns true if types of elements are the same
     */
    isElementInList(expected, actual, message) {
        consoleLogHelper.isElementInListAssertionLog(expected, actual, message);

        return expected.includes(actual);
    }

    /**
     * The method compares types of elements
     * @param expected - expected data
     * @param actual - actual data
     * @param message - message when unexpected data
     * @returns true if types of elements are the same
     */
    areElementsInList(expected, actual, message) {
        let isValid = true;
        if (actual.length > 0) {
            actual.forEach((value, index) => {
                consoleLogHelper.isElementInListAssertionLog(expected, actual[index], message);
                isValid = expected.includes(actual[index]);
            });
        }
        return isValid;
    }

}

module.exports = new basicHelper();

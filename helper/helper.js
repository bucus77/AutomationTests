const consoleLogHelper = require('./console.LogHelper');

class basicHelper {
    /**
     * The method compares types of elements
     * @param expected - expected data
     * @param actual - actual data
     * @param message - message when unexpected data
     * @returns true if types of elements are the same
     */
    async isEqualLiteral(expected, actual, message) {
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
    async isElementInList(expected, actual, message) {
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
    async areElementsInList(expected, actual, message) {
        let isValid = true;
        if (actual.length > 0) {
            actual.forEach((value, index) => {
                consoleLogHelper.isElementInListAssertionLog(expected, actual[index], message);
                isValid = expected.includes(actual[index]);
            });
        }
        return isValid;
    }

    /**
     * The method checks if element is visible
     * @param elementDisplayed - checked element
     * @param message - info about checked element
     * @returns true if element is displayed, false otherwise
     */
    async isElementDisplayed(element, message) {
        const isDisplayed = await element.isDisplayed();
        consoleLogHelper.isTrueAssertionLog(isDisplayed, message);
        return isDisplayed;
    }

    /**
     * The method checks if element is visible
     * @param elementDisplayed - checked element
     * @param message - info about checked element
     * @returns true if element is displayed, false otherwise
     */
    async areElementDisplayed(elements, message) {
        const areDisplayed = await elements.isDisplayed();
        const length = await areDisplayed.length;
        let areValid = true;
        for (let i = 0; i < length; i++) {
            consoleLogHelper.isTrueAssertionLog(areDisplayed[i], `${i} ${message}`);
            if (!areDisplayed[i]) {
                areValid = false;
            }
        }
        return areValid;
    }

    /**
     * The method compares two elements
     * @param expected - expected data
     * @param actual - actual read data
     * @param message - Info about comparing elements
     * @returns true if elements are equal, false otherwise
     */
    async areEqualLiterals(expected, actual, message) {
        let isValid = true;

        if (actual.length < expected.length) {
            expected.forEach((value, index) => {
                index >= actual.length ? consoleLogHelper.areEqualAssertionLog(value, "Element not found", message) :
                    consoleLogHelper.areEqualAssertionLog(value, actual[index], message);
                if (value !== actual[index]) {
                    isValid = false;
                }
            });
        } else {
            actual.forEach((value, index) => {
                index >= expected.length ? consoleLogHelper.areEqualAssertionLog("NO ELEMENT EXPECTED", value, message) :
                    consoleLogHelper.areEqualAssertionLog(expected[index], value, `${index} ${message}`);
                if (value !== expected[index]) {
                    isValid = false;
                }
            });
        }

        return isValid;
    }
}

module.exports = new basicHelper();

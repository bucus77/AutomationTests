const helper = require('../helper/helper');

/**
 * @category General
 * @description
 * Used in checking main Page
 */
class mainPage {
    async validPageTitle(expected) {
        const actualTitle = await browser.getTitle();
        const isValid = await helper.isEqualLiteral(expected, actualTitle, 'page title');
        return isValid;
    }
}

module.exports = new mainPage();

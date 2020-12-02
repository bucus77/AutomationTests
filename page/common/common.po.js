const helper = require('../../helper/helper');

const commonElements = require('./modules/commonElements.mo');

/**
 * @category General
 * @description
 * Used in checking main Page
 */
class common {
    async validHeaderLinks(expected) {
        const elements = commonElements.getHeaderLinks();
        const actualElements = await elements.getText();
        await actualElements.splice(1, 1);
        const loginLink = await commonElements.getLoginLink().first();
        const actualLoginText = await loginLink.getText();
        await actualElements.push(actualLoginText);
        const areElementsInlist = await helper.areElementsInList(expected, actualElements, 'header link');
        return areElementsInlist;
    }

    async validLeftNavbar(expected) {
        const elements = commonElements.getLeftNavbarLinks();
        const actualElements = await elements.getText();
        const areElementsInlist = await helper.areElementsInList(expected, actualElements, 'left nav bar');
        return areElementsInlist;
    }

    async validTopNav(expected) {
        const elements = commonElements.getTopNav();
        const actualElements = await elements.getText();
        const areElementsInlist = await helper.areElementsInList(expected, actualElements, 'top nav');
        return areElementsInlist;
    }

    async validLeftNavWraper(index, expected) {
        const mainWrapper = await commonElements.getLeftNavWrapper().get(index);
        await browser.actions().mouseMove(mainWrapper).perform();
        const wrapper = commonElements.getWrapper(index);
        const actualElements = await wrapper.getText();
        console.log(actualElements[0]);
        await actualElements.shift();
        const areElementsInlist = await helper.areElementsInList(expected, actualElements, 'top nav');
        return areElementsInlist;
    }
}

module.exports = new common();

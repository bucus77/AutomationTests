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

    async areDisplayedTextAreas() {
        const textAreas = commonElements.getTextAreas();
        const areValid = await helper.areElementDisplayed(textAreas, 'text area');
        return areValid;
    }

    async validTextAreaHeaders(expected) {
        const headers = commonElements.getTextAreaHeaders();
        const actualHeaders = await headers.getText();
        const areValid = await helper.areEqualLiterals(expected, actualHeaders, 'header in text area');
        return areValid;
    }

    async validTextAreaDescription(expected) {
        const headers = commonElements.getTextAreaDescriptions();
        const actualHeaders = await headers.getText();
        const areValid = await helper.areEqualLiterals(expected, actualHeaders, 'description in text area');
        return areValid;
    }

    async validFooterBoxHeaders(expected) {
        const headers = commonElements.footerBoxHeaders();
        const actualHeaders = await headers.getText();
        const areValid = await helper.areEqualLiterals(expected, actualHeaders, 'headers in footer box');
        return areValid;
    }

    async validFooterLinks(expected) {
        const headers = commonElements.firstFooterBoxLinks();
        const actualHeaders = await headers.getText();
        const headers2 = commonElements.secondFooterBoxLinks();
        const actualHeaders2 = await headers2.getText();
        const headers3 = commonElements.thirdFooterBoxLinks();
        const actualHeaders3 = await headers3.getText();
        const headers4 = commonElements.fourthFooterBoxLinks();
        const actualHeaders4 = await headers4.getText();
        const areValid = await helper.areEqualLiterals(Object.values(expected.firstBox), actualHeaders, 'links in first footer box');
        const areValid2 = await helper.areEqualLiterals(Object.values(expected.secondBox), actualHeaders2, 'links in second footer box');
        const areValid3 = await helper.areEqualLiterals(Object.values(expected.thirdBox), actualHeaders3, 'links in third footer box');
        const areValid4 = await helper.areEqualLiterals(Object.values(expected.fourthBox), actualHeaders4, 'links in fourth footer box');
        return areValid && areValid2 && areValid3 && areValid4;
    }
}

module.exports = new common();

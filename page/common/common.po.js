const helper = require('../../helper/helper');

const commonElements = require('./modules/commonElements.mo');

/**
 * @category General
 * @description
 * Used in checking main Page
 */
class common {
    async validHeaderLinks(expected){
        const elements = commonElements.getHeaderLinks();
        const actualElements = await elements.getText();
        await actualElements.splice(1,1);
        const loginLink = await commonElements.getLoginLink().first();
        const actualLoginText = await loginLink.getText();
        await actualElements.push(actualLoginText);
        const areElementsInlist = await helper.areElementsInList(expected,actualElements,'header link');
        return areElementsInlist;
    }

    async validLeftNavbar(expected){
        const elements = commonElements.getLeftNavbarLinks();
        const actualElements = await elements.getText();
        const areElementsInlist = await helper.areElementsInList(expected,actualElements,'left nav bar');
        return areElementsInlist;
    }
}

module.exports = new common();

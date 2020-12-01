const afterBeforeHelper = require('../../helper/afterBeforeAllHelper');

const commonPage = require('../../page/common/common.po');
const commonLiterals = require('../../data/Literals/common/commonLiterals.td');

describe('Common Tests', () => {
    global.testNumber = 'TEST 1';
    beforeAll(async () => {
        await afterBeforeHelper.beforeAllHelper();
    });

    afterAll(async () => {
        await afterBeforeHelper.afterAllHelper();
    });

    beforeEach(async () => {
        await afterBeforeHelper.beforeEachHelper(global.testNumber);
    });

    afterEach(async () => {
        await afterBeforeHelper.afterEachHelper(global.testNumber);
    });


    it('main Page Links', async () => {
        global.testNumber = 'TEST 1';
        await expect(await commonPage.validHeaderLinks(
            Object.values(commonLiterals.headerLinks)
        ))
            .toBe(true, 'header links are not valid');
    });

    it('Left Nav Links', async () => {
        global.testNumber = 'TEST 2';
        await expect(await commonPage.validLeftNavbar(
            Object.values(commonLiterals.leftNavigation)
        ))
            .toBe(true, 'header links are not valid');
    });
});

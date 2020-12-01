const afterBeforeHelper = require('../helper/afterBeforeAllHelper');
const helper = require('../helper/helper');

const mainPage = require('../page/mainPage.po');

const commonLiterals = require('../data/Literals/common/commonLiterals.td');

describe('main Page Tests', () => {
    global.testNumber = 'TEST 1';

    beforeAll(async () => {
        await afterBeforeHelper.beforeAllHelper(global.testNumber);
    });

    afterAll(async () => {
        await afterBeforeHelper.afterAllHelper(global.testNumber);
    });

    it('should have a title', async () => {
        await expect(await mainPage.validPageTitle(
            commonLiterals.pageTitle
        ))
            .toBe(true, 'page title not valid');
    });
});

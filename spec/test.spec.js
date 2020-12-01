const afterBeforeHelper = require('../helper/afterBeforeAllHelper');
const helper = require('../helper/helper');

const mainPage = require('../page/mainPage.po');

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
            'Księgarnia internetowa swiatksiazki.pl z dostawą 0 zł do Księgarń Świat Książki'
        ))
            .toBe(true, 'page title not valid');
    });
});

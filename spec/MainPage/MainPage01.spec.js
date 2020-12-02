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


    it('TEST 1: main Page Links', async () => {
        global.testNumber = 'TEST 1';
        expect(await commonPage.validHeaderLinks(
            Object.values(commonLiterals.headerLinks)
        ))
            .toBe(true, 'header links are not valid');
    });

    it('TEST 2: Left Nav Links', async () => {
        global.testNumber = 'TEST 2';
        expect(await commonPage.validLeftNavbar(
            Object.values(commonLiterals.leftNavigation)
        ))
            .toBe(true, 'header links are not valid');
    });

    it('TEST 3: Top navs', async () => {
        global.testNumber = 'TEST 3';
        expect(await commonPage.validTopNav(
            Object.values(commonLiterals.topNavigation)
        ))
            .toBe(true, 'header links are not valid');
    });

    it('TEST 4: Left nav wrappers', async () => {
        global.testNumber = 'TEST 4';
        const expected = await Object.values(commonLiterals.nestedMenu);
        const counters = await expected.length;
        for (let i = 0; i < counters; i++) {
            expect(await commonPage.validLeftNavWraper(
                i,
                Object.values(expected[i])
            ))
                .toBe(true, 'header links are not valid');
        }
    });
});

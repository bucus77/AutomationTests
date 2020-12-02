class CommonElementsMO {
    getHeaderLinks() {
        return $$('.panel.header .header.links  > li > a');
    }

    getLoginLink() {
        return $$('#authorization-trigger')
    }

    getLeftNavbarLinks() {
        return $$(".space-base [id *='menu-11-5fc'] .level0 > .menu-link > span")
    }
}

module.exports = new CommonElementsMO();

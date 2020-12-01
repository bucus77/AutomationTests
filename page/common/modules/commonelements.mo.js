class CommonElementsMO {
    getHeaderLinks() {
        return $$('.panel.header .header.links  > li > a');
    }

    getLoginLink() {
        return $$('#authorization-trigger')
    }

    getLeftNavbarLinks() {
        return $$('.space-base #menu-11-5fc4ebd76da02 .level0 > .menu-link > span')
    }
}

module.exports = new CommonElementsMO();

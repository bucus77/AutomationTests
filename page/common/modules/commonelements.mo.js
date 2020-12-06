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

    getTopNav() {
        return $$("[id *= 'menu-10-5fc'] .level0 .menu-link >span")
    }

    getLeftNavWrapper() {
        return $$(".space-base [id *='menu-11-5fc'] > ul > li ");
    }

    getWrapper(index) {
        return this.getLeftNavWrapper().get(index).$$("ul > li > a > span");
    }

    // name form class, because i don't know how to name this
    getTextAreas() {
        return $$(".text-area");
    }

    getTextAreaHeaders() {
        return $$('.text-area h4')
    }

    getTextAreaDescriptions() {
        return $$('.text-area p')
    }

    footerBoxHeaders() {
        return $$('.footer-box > .h5')
    }

    firstFooterBoxLinks(){
        return $$('#footer-content-1 > li')
    }

    secondFooterBoxLinks(){
        return $$('#footer-content-2 > li')
    }

    thirdFooterBoxLinks(){
        return $$('#footer-content-3 > li')
    }

    fourthFooterBoxLinks(){
        return $$('#footer-content-4 > li')
    }

}

module.exports = new CommonElementsMO();

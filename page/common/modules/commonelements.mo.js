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

    getTopNav(){
        return $$("[id *= 'menu-10-5fc'] .level0 .menu-link >span")
    }

    getLeftNavWrapper(){
        return $$(".space-base [id *='menu-11-5fc'] > ul > li " );
    }

    getWrapper(index){
        return this.getLeftNavWrapper().get(index).$$("ul > li > a > span");
    }
}

module.exports = new CommonElementsMO();

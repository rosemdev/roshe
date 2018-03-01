import MobMenuMaster from "./mobileMenu"
import TabMaster from "./tabs"


window.onload = function () {

    var myTabs = new TabMaster(".tabs-container", {
        activeTab: 2
    });


    var myMobMenu = new MobMenuMaster("nav > .menu", {
    });
};

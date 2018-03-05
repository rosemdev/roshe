import MobMenuMaster from "./mobileMenu"
import TabMaster from "./tabs"
import ModalMaster from "./modalWindow.js"
import Carousel from "./slider.js"
import Accordion from "./accordion.js"


window.onload = function () {

    let myTabs = new TabMaster(".tabs-container", {
        activeTab: 2
    });


    let myMobMenu = new MobMenuMaster("nav > .menu", {
    });

    let modalWin = new ModalMaster(".modal-container", {
    });

    // let MyCarousel = new Carousel(".rosem-carousel");
    // MyCarousel.enable();

    let myAccordion = new Accordion(".accordion", {
        activeTab: 1,
        collapsible: true

    });


};

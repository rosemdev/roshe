import MobMenuMaster from "./mobileMenu"
import TabMaster from "./tabs"
import ModalMaster from "./modalWindow.js"
import Carousel from "./slider.js"
import Accordion from "./accordion.js"
import Modal from "./modalWin.js"


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

    // let newModal = new Modal();
    //  newModal.createContent ("<h1>hello!</h1><img src='https://learn.javascript.ru/article/traversing-dom/dom-links.png'><h1>Good bie</h1>");
    //

        // modal: ".modal",
        // closeIcon: ".modal-header > span",
        // openBtn: "button"




};

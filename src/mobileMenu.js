export default function MobMenuMaster(selector) {

    var menuContainer = document.querySelector("nav > .menu"),
        mainMenuItems = menuContainer.querySelectorAll(".menu > li"),
        subMenuContainers = menuContainer.querySelectorAll(".sub-menu"),
        subMenuItems = menuContainer.querySelectorAll(".sub-menu > li"),
        mobileMenuSwitcher = document.querySelector(".header-menu > li:last-child > a > img"),
        activeItemIndex = 0;


    if (null !== mobileMenuSwitcher) {

        mobileMenuSwitcher.addEventListener("click", function (event) {
            menuContainer.classList.toggle("mob-main-menu-active");
            mobileMenuSwitcher.style.backgroundColor = "#5b444b";
        });

        menuContainer.addEventListener("click", function (event) {

            var targetClickedMenuItem = event.target.closest("li");

            for (var i = 0; i < mainMenuItems.length; i++) {

                if (mainMenuItems[i] === targetClickedMenuItem) {

                    subMenuContainers[i].classList.toggle("sub-menu-active");
                    mainMenuItems[i].classList.toggle("active-item");

                    if (i !== activeItemIndex) {
                        subMenuContainers[activeItemIndex].classList.remove("sub-menu-active");
                        mainMenuItems[activeItemIndex].classList.remove("active-item");

                    }

                    activeItemIndex = i;

                }
            }


        });

        document.addEventListener("click", function (event) {

            var activeItem = document.querySelector("li.active-item"),
                activeSubMenu = document.querySelector(".sub-menu-active"),
                ativeMainMobMenu = document.querySelector(".menu.mob-main-menu-active"),
                targetActiveItem = event.target.closest(".menu > li"),
                targetActiveMainMenu = event.target.closest(".menu.mob-main-menu-active"),
                targetSwitcher = event.target.closest(".header-menu > li:last-child > a > img");

            if (activeItem && activeSubMenu && !targetActiveItem) {

                activeItem.classList.remove("active-item");
                activeSubMenu.classList.remove("sub-menu-active");

            }
            if (ativeMainMobMenu && !targetActiveMainMenu && !targetSwitcher) {
                ativeMainMobMenu.classList.remove("mob-main-menu-active");
            }


        });


    }


}












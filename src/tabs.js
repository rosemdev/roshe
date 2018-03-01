export default function TabMaster(selector, options) {

    const container = document.querySelector(selector),
        tabsContainer = container.querySelector(".tabs-container > ul"),
        tabs = container.querySelectorAll(".tabs-container > ul > li"),
        tabsContents = container.querySelectorAll(".tab-content > article ");
    let activeTabIndex = 0;

    if (options.activeTab) {
        activeTabIndex = options.activeTab;
        tabsContents[options.activeTab].classList.add("active");
        tabs[options.activeTab].classList.add("active");


    }

    tabsContainer.addEventListener("click", function (event) {
        const targetClickedEl = event.target.closest("li");

        for (let [i, tab] of Object.entries(tabs)) {
            if (tab === targetClickedEl ) {

                tabsContents[i].classList.toggle("active");
                tab.classList.toggle("active");

                if (i !== activeTabIndex ) {
                    tabsContents[activeTabIndex].classList.remove("active");
                    tabs[activeTabIndex].classList.remove("active");

                }
                    activeTabIndex = i;
            }

        }


    });


}
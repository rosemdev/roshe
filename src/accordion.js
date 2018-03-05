export default function Accordion (selector, options) {

    this.accordionContainer = document.querySelector(selector);
    this.tabs = this.accordionContainer.querySelectorAll(".panel");
    this.tabContents = this.accordionContainer.querySelectorAll(".tab-content");

    var self = this;
    var activeTab = 0;


    if (options.activeTab) {
        this.tabContents[options.activeTab].classList.add("active");
        self.tabs[options.activeTab].classList.add("active");

        activeTab = options.activeTab;

    }


    this.accordionContainer.addEventListener("click", function (event) {


        var target = event.target,
            tabElement = target.closest('.panel');


        if (null !== tabElement) { // if user clicked on tab

            for (var i = 0; i < self.tabs.length; i++) {
                if (self.tabs[i] === tabElement) { // if tab from collection is exactly the same, as user clicked
                    self.tabContents[i].classList.toggle("active");
                    self.tabs[i].classList.toggle("active");


                    if (i !== activeTab && options.collapsible) {
                        self.tabContents[activeTab].classList.remove("active");
                        self.tabs[activeTab].classList.remove("active");
                    }

                    activeTab = i;
                }
            }
        }
    });


};
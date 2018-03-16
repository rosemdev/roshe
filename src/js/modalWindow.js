export default function ModalMaster (selector) {
    
    const
        modalContainer = document.querySelector(selector),
        openModalBtn = modalContainer.querySelector("button"),
        modalWindow = modalContainer.querySelector(".modal"),
        closeIcon = modalWindow.querySelector(".modal-header > span"),
        continueShopping = modalWindow.querySelector("[data-action='continue-shopping']");
    let self = this;

    ModalMaster.prototype.showModalWin = function () {
        modalWindow.classList.add("modal-active");

        if(modalWindow.classList.contains("modal-active")){
            document.body.style.overflow = 'hidden';
        }

    };

    ModalMaster.prototype.closeWin = function () {
        modalWindow.classList.remove("modal-active");
        document.body.style.overflow = '';

    };


    openModalBtn.addEventListener("click", self.showModalWin);

    closeIcon.addEventListener("click", self.closeWin);

    continueShopping.addEventListener("click", function (event) {
        event.preventDefault();
        self.closeWin();
    });

    document.addEventListener("click", function (event) {
        let openedModal = modalContainer.querySelector(".modal.modal-active");

       if( event.target.closest(".modal ") !== openedModal && event.target !== openModalBtn) {
           self.closeWin();
       }
    });


}
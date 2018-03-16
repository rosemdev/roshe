export default function Modal (selector, options) {

    Modal.prototype.createContent = function (content) {
        let usrCont = document.createElement('div');
        usrCont.className = 'content';

        usrCont.innerHTML= content;
        // usrCont.style.display = 'none';

        this.modal.appendChild(usrCont);

    };

    Modal.prototype.render = function () {
        let fragment = document.createDocumentFragment();
        this.modalContainer = document.createElement('div');
        this.modal = document.createElement('div');
        this.closeIcon = document.createElement('span');
        this.openBtn = document.createElement('button');




        this.modalContainer.className = "modalWin__container";
        this.modal.className = "modalWin__modal";
        this.closeIcon.className = 'closeIcon';
        this.closeIcon.textContent = 'close';
        this.openBtn.className = 'openBtn';
        this.openBtn.textContent = 'open button';


        this.modalContainer.appendChild(this.modal);
        this.createContent();
        this.modalContainer.appendChild(this.openBtn);
        this.modal.appendChild(this.closeIcon);
        fragment.appendChild(this.modalContainer);
        console.log(fragment);

        document.body.appendChild(fragment);


    };

    if(!selector && !options){
        this.render();
    } else {

        this.modalContainer = document.querySelector(selector);
        this.modal = this.modalContainer.querySelector(options.modal);
        this.closeIcon = this.modalContainer.querySelector(options.closeIcon);
        this.openBtn = this.modalContainer.querySelector(options.openBtn);
    }


    let self = this;

    let showModal = function () {
        self.modal.style.display = "block";
    };

    let closeModal = function () {
        self.modal.style.display = "none";
    };

    
    


    this.modalContainer.addEventListener('click', function (event) {
        let target = event.target;


        if(target === self.openBtn) {
            showModal();
        }

        if(target === self.closeIcon) {
            closeModal();
        }


    });




}
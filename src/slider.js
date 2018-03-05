function Carousel(elementSelector) {

    this.getPrevSlide = this.previousSlide.bind(this);
    this.getNextSlide = this.nextSlide.bind(this);
    this.arrFunc = [];

    this.currentSlideIndex = 0;

    this.element = document.querySelector(elementSelector);

    this.slideCollection = this.element.getElementsByClassName("mySlides");
    this.paginationCollection = this.element.getElementsByClassName("dot");

    this.enable();


    this.showSlideByIndex(this.currentSlideIndex);
}


Carousel.prototype.enable = function() {

    this.element.querySelector(".prev").addEventListener("click", this.getPrevSlide);
    this.element.querySelector(".next").addEventListener("click", this.getNextSlide);

    Array.prototype.forEach.call(this.paginationCollection, function(paginationItem, index) {
        var newFunc = this.showSlideByIndex.bind(this, index);
        paginationItem.addEventListener("click", newFunc);

        this.arrFunc.push(newFunc);
    }.bind(this));
}

Carousel.prototype.disableCarousel = function() {

    this.element.querySelector(".prev").removeEventListener("click", this.getPrevSlide);
    this.element.querySelector(".next").removeEventListener("click", this.getNextSlide);
    Array.prototype.forEach.call(this.paginationCollection, function(paginationItem, index) {

        paginationItem.removeEventListener("click", this.arrFunc.shift());
        paginationItem.classList.remove("active");
        paginationItem.classList.add("dot-cursor");
    }.bind(this));
    this.element.querySelector(".prev").style.pointerEvents = "none";
    this.element.querySelector(".next").style.pointerEvents = "none";


}


Carousel.prototype.showSlide = function(slide) {
    this.showSlideByIndex(slide - 1);
}

Carousel.prototype.showSlideByIndex = function(slideIndex) {
    if (slideIndex > this.slideCollection.length - 1) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = this.slideCollection.length - 1;
    }

    this.slideCollection[this.currentSlideIndex].style.display = "none";
    this.paginationCollection[this.currentSlideIndex].classList.remove("active");

    this.slideCollection[slideIndex].style.display = "block";
    this.paginationCollection[slideIndex].classList.add("active");

    this.currentSlideIndex = slideIndex;
}

Carousel.prototype.nextSlide = function() {
    this.showSlideByIndex(this.currentSlideIndex + 1);
}

Carousel.prototype.previousSlide = function() {
    this.showSlideByIndex(this.currentSlideIndex - 1);
}

MyCarousel = new Carousel(".rosem-carousel");
console.log(MyCarousel);
MyCarousel.enable();

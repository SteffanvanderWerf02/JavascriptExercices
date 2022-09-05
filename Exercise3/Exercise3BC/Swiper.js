class Swiper {

    constructor() {
        this.slideIndex = 1
    }

    showNextSlide(index) {
        this.showSlide(this.slideIndex += index)
    }

    showSlide(index) {

        let slides = document.getElementsByClassName("slides");
        if (index > slides.length) {
            this.setSlideIndex(1);
        }
        if (index < 1) {
            this.setSlideIndex(slides.length)
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex - 1].style.display = "Block"

        setInterval(() => {
            this.showNextSlide(1)
        }, 5000);
    }

    setSlideIndex(n) {
        this.slideIndex = n;
    }
}
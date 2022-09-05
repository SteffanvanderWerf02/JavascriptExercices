let swiper = new Swiper();
let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prev").addEventListener("click", () => {
        swiper.showNextSlide(-1);
    })
    document.getElementById("next").addEventListener("click", () => {
        swiper.showNextSlide(1);
    })

    swiper.showSlide(slideIndex);


})

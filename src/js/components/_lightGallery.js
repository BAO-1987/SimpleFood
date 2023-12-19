import lightGallery from 'lightgallery';
let $lgSwiper = document.getElementById('lg-swipper');
import Swiper from 'swiper';


const reviewsSlider = new Swiper(".single-slider", {
  // other parameters
 navigation: {
   nextEl: ".single-slider__next",
   prevEl: ".single-slider__prev",
 },
  on: {
    init: function () {
      const lg = lightGallery($lgSwiper, {
        speed: 300,
      });
      $lgSwiper.addEventListener("lgBeforeClose", () => {
        reviewsSlider.slideTo(lg.index, 0);
      });
    }
  }
 });


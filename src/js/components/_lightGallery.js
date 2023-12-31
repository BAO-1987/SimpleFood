import lightGallery from 'lightgallery';
let $lgSwiper = document.getElementById('lg-swipper');
import Swiper from 'swiper';


const productSlider = new Swiper(".product-slider", {
 navigation: {
   nextEl: ".product-slider__next",
   prevEl: ".product-slider__prev",
 },
  on: {
    init: function () {
      const lg = lightGallery($lgSwiper, {
        speed: 300,
      });
      $lgSwiper.addEventListener("lgBeforeClose", () => {
        productSlider.slideTo(lg.index, 0);
      });
    }
  }
 });


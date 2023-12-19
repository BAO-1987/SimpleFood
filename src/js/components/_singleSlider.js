import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
  dragable: true,
  grabCursor: true,

  pagination: {
    el: '.single-slider__pagination',
  },

  navigation: {
    nextEl: ".single-slider__next",
    prevEl: ".single-slider__prev",
  },
};

const reviewsSlider = new Swiper('.single-slider', sliderOptions);

import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
 draggable: true,
  grabCursor: true,

  pagination: {
    el: '.product-slider__pagination',
  },

  navigation: {
    nextEl: '.product-slider__next',
    prevEl: '.product-slider__prev',
  },
};

const swiper = new Swiper('.product-slider', sliderOptions);


// import PhotoSwipeLightbox from 'photoswipe';
// import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js'
import PhotoSwipe from 'photoswipe';

const photo_swipe_options = {
  gallery: '#my-gallery',
  pswpModule: PhotoSwipe,
  // set background opacity
  bgOpacity: 1,
  showHideOpacity: true,
  children: 'a',
  loop: true,
  showHideAnimationType: 'zoom',
  /* options: fade, zoom, none */

  /* Click on image moves to the next slide */
  imageClickAction: 'next',
  tapAction: 'next',

  /* ## Hiding a specific UI element ## */
  zoom: false,
  close: true,
  counter: true,
  arrowKeys: true,
  /* ## Options ## */
  bgOpacity: "1",
  /* deafult: 0.8 */
  wheelToZoom: true,
  /* deafult: undefined */
};

const lightbox = new PhotoSwipeLightbox(photo_swipe_options);

lightbox.init();

lightbox.on('change', () => {
  const {
    pswp
  } = lightbox;
  swiper.slideTo(pswp.currIndex, 0, false);
  // console.log('Slide index', pswp.currIndex);
  //console.log('Slide object', pswp.currSlide);
  //console.log('Slide object data', pswp.currSlide.data);
});

/* ### PhotoSwipe events ### */

lightbox.on('afterInit', () => {
  const {
    pswp
  } = lightbox;
  if (swiper.params.autoplay.enabled) {
    swiper.autoplay.stop();
  };
});

lightbox.on('closingAnimationStart', () => {
  //console.log('closingAnimationStart');
  const {
    pswp
  } = lightbox;
  swiper.slideTo(pswp.currIndex, 0, false);
  /* if autoplay enabled == true -> autoplay.start() when close lightbox */
  if (swiper.params.autoplay.enabled) {
    swiper.autoplay.start();
  }
});


// // const sliderClose = () => {
// //   closeBtn = document.querySelector('.product-slider__close');
// //   closeBtn.addEventListener('click', () => {
// //     document.querySelector('.product-page__wrapper').classList.remove('fs');
// //     closeBtn.remove();
// //   });
// // };

// // const slides = document.querySelectorAll('.sl .swiper-slide');
// // if (slides.length > 0) {
// //   for (let i = 0; i < slides.length; i++) {
// //     slides[i].addEventListener('click', (e) => {
// //       if (!document.querySelector('.product-slider__close')) {
// //         document.querySelector('.product-page__wrapper').classList.add('fs');
// //         e.target.parentNode.parentNode.parentNode.insertAdjacentHTML(
// //           'beforebegin',
// //           '<button class="product-slider__close" type="button" aria-label="закрити"></button>'
// //         );
// //       }

// //       setTimeout(() => {
// //         sl.update();
// //         sliderClose();
// //       })

// //     });
// //   }
// // }

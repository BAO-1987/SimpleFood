import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
  dragable: true,
  grabCursor: true,

  pagination: {
    el: '.product-slider__pagination',
  },

  navigation: {
    nextEl: '.product-slider__next',
    prevEl: '.product-slider__prev',
  },
};

const sl = new Swiper('.sl', sliderOptions);

const sliderClose = () => {
  closeBtn = document.querySelector('.product-slider__close');
  closeBtn.addEventListener('click', () => {
    document.querySelector('.product-page__wrapper').classList.remove('fs');
    closeBtn.remove();
  });
};

const slides = document.querySelectorAll('.sl .swiper-slide');
if (slides.length > 0) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', (e) => {
      if (!document.querySelector('.product-slider__close')) {
        document.querySelector('.product-page__wrapper').classList.add('fs');
        e.target.parentNode.parentNode.parentNode.insertAdjacentHTML(
          'beforebegin',
          '<button class="product-slider__close" type="button" aria-label="закрити"></button>'
        );
      }

      setTimeout(() => {
        sl.update();
        sliderClose();
      })

    });
  }
}

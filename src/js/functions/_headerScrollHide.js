import { _querySelector, _add, _remove } from '../_config.js';
import { addClassItem, removeClassItem } from './_toggleClassItem';
import throttle from '../vendor/_throttle';

let headerHeight = parseFloat(
  document.documentElement.style.getPropertyValue('--header-height')
);

// let lastHeaderPosition;
// let newHeaderPosition;

// const hideHeaderOnScroll = () => {
//   lastHeaderPosition = window.scrollY;
//   addClassItem('.header', 'scroll');
//   if (lastHeaderPosition > 10) {
//     addClassItem('.header', 'scroll');
//   } else {
//     removeClassItem('.header', 'scroll');
//   }

//   if (lastHeaderPosition < headerHeight) {
//     removeClassItem('.header', 'scroll');
//   }

//   newHeaderPosition = lastHeaderPosition;
//   };

// const throttleHideHeader = throttle(() => {
//   hideHeaderOnScroll();
// }, 250);

// window.addEventListener('scroll', throttleHideHeader);
// throttleHideHeader();

const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  window.scrollY > 25
    ? header.classList.add('is-scroll')
    : header.classList.remove('is-scroll');
});

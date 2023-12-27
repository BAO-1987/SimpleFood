// document.addEventListener('DOMContentLoaded', () => {
//   const formSearch = document.querySelector('.search__form');
//   const mobileFormBtn = document.querySelector('.search__btn');
//   const formClose = document.querySelectorAll('.form__close');
//   const pageBody = document.querySelectorAll('.page');
//   const navigationHeader = document.querySelector(".header");

//   const toggleForm = () => {
//     formSearch.classList.add('is-open');
//     navigationHeader.classList.add('is-open');
//     pageBody.classList.add('open');
//   };

//   const closeForm = () => {
//     formSearch.classList.remove('is-open');
//     navigationHeader.classList.remove('is-open');
//     pageBody.classList.remove('open');
//   };

//   const closePage = (event) => {
//     if (!formSearch.contains(event.target) && !mobileFormBtn.contains(event.target)) {
//       closeForm();
//     }
//   };

//   if (mobileFormBtn) {
//     mobileFormBtn.addEventListener('click', toggleForm);
//   }

//   formClose.forEach(el => {
//     el.addEventListener('click', closeForm);
//   });

//   document.addEventListener('click', closePage);
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const formSearch = document.querySelector('.search__form');
//   const mobileFormBtn = document.querySelector('.search__btn');
//   const formClose = document.querySelector('.form__close');
//   const pageBody = document.querySelector('.page');
//   const navigationHeader = document.querySelector(".header");

//   const toggleForm = () => {
//     formSearch.classList.add('is-open');
//     navigationHeader.classList.add('is-open');
//     pageBody.forEach(page => {
//       page.classList.add('open');
//     });
//   };

//   const closeForm = () => {
//     formSearch.classList.remove('is-open');
//     navigationHeader.classList.remove('is-open');
//     pageBody.forEach(page => {
//       page.classList.remove('open');
//     });
//   };

//   const closePage = (event) => {
//     if (!formSearch.contains(event.target) && !mobileFormBtn.contains(event.target)) {
//       closeForm();
//     }
//   };

//   if (mobileFormBtn) {
//     mobileFormBtn.addEventListener('click', toggleForm);
//   }

//   formClose.forEach(el => {
//     el.addEventListener('click', closeForm);
//   });

//   document.addEventListener('click', closePage);
// // });

// const modal = document.querySelector("dialog");
// const openModal = document.querySelector(".search__btn");
// const closeModal = document.querySelector(".form__close");

// openModal.addEventListener("click", () => {
//   modal.showModal();
// });

// closeModal.addEventListener("click", () => {
//   modal.close();
// });

const modal = document.querySelector("dialog");
const openModal = document.querySelector(".search__btn");
const closeModal = document.querySelector(".form__close");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// Додавання обробника подій для кліку на window
window.addEventListener("click", (event) => {
  // Перевірка, чи клік був здійснений поза модальним вікном
  if (event.target === modal) {
    modal.close();
  }
});



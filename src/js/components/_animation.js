import ScrollReveal from "scrollreveal";
ScrollReveal({
  reset: true,
  easing: "ease",
});


// ScrollReveal().reveal(".header", {
//   distance: '200px',
//   origin: 'top',
//   duration: 1000,
//   delay: 500,
// });

ScrollReveal().reveal(".hero__content, .delivery__content, .slider, .app__content, .catalog__content, .single__content, .tabs, .recent__content, .lg-container", {
  duration: 1200,
  distance: "20px",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(".hero__image, .delivery__image, .app__image, .filter", {
  duration: 1000,
  distance: "20px",
  delay: "100",
  origin: "right",
});

ScrollReveal().reveal(".delivery__image, .filter", {
  origin: "left",
});

ScrollReveal().reveal(".title", {
  duration: 1200,
  distance: "20px",
  delay: "100",
  origin: "top",
});

ScrollReveal().reveal(
  ".catalog__list > li", {
    duration: 700,
    distance: "20px",
    delay: "200",
    origin: "top",
    mobile: false,
  }
);


ScrollReveal().reveal(".footer, .categories__btn, .pagination", {
  duration: 1000,
  distance: "20px",
  delay: "100",
  origin: "bottom",
});

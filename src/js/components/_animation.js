import ScrollReveal from "scrollreveal";
ScrollReveal({
  easing: "ease",
});


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
    distance: "30px",
    delay: "200",
    origin: "top",
    mobile: false,
  }
);


ScrollReveal().reveal(".footer__top, .categories__btn, .pagination", {
  duration: 800,
  distance: "25px",
  delay: "100",
  origin: "bottom",
});

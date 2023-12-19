import Choices from "choices.js";

const elementChoices = Array.from(
  document.querySelectorAll(".choices__input")
);

if (elementChoices.length > 0) {
  elementChoices.forEach((el) => {
    const choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
       allowHTML: true,
    });
  });
}
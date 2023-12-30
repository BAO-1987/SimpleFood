// const navigation = document.querySelector(".header");
// const page = document.querySelector(".page");

// const navList = document.querySelector(".nav__list");
// navigation.addEventListener("click", BurgerBtnClick);

// function BurgerBtnClick(e) {
//   if (!e.target.parentNode.matches(".burger") && !e.target.matches(".burger")) return;
//   e.addEventListener;
//   this.classList.remove("closed");
//   page.classList.add("open");
//   navList.classList.add("active");
//   if (this.matches(".opened")) {
//     this.classList.add("closed");
//     page.classList.remove("open");
//     navList.classList.remove("active");
//     setTimeout(() => {
//       this.classList.remove("opened");
//     }, 500);
//   }
//   this.classList.add("opened");
// }

// const navigation = document.querySelector(".header");
// const page = document.querySelector(".page");
// const navList = document.querySelector(".nav__list");

// navigation.addEventListener("click", BurgerBtnClick);
// document.addEventListener("click", closeMenu);

// function BurgerBtnClick(e) {
//   if (!e.target.parentNode.matches(".burger") && !e.target.matches(".burger")) return;

//   navigation.classList.remove("closed");
//   page.classList.add("open");
//   navList.classList.add("active");

//   if (navigation.classList.contains("opened")) {
//     navigation.classList.add("closed");
//     page.classList.remove("open");
//     navList.classList.remove("active");

//     setTimeout(() => {
//       navigation.classList.remove("opened");
//     }, 500);
//   }

//   navigation.classList.add("opened");
//   e.stopPropagation();
// }

// function closeMenu(e) {
//   const isBurger = e.target.closest(".burger");
//   const isNavList = e.target.classList.contains("nav__list");

//   if (!isBurger && !isNavList && navList.classList.contains("active")) {
//     navigation.classList.add("closed");
//     page.classList.remove("open");
//     navList.classList.remove("active");
//   }
// }

const navigation = document.querySelector(".header");
const page = document.querySelector(".page");
const navList = document.querySelector(".nav__list");

navigation.addEventListener("click", BurgerBtnClick);
document.addEventListener("click", closeMenu);

function BurgerBtnClick(e) {
  if (!e.target.parentNode.matches(".burger") && !e.target.matches(".burger")) return;

  navigation.classList.remove("closed");
  page.classList.add("open");
  navList.classList.add("active");

  if (navigation.classList.contains("opened")) {
    navigation.classList.add("closed");
    page.classList.remove("open");
    navList.classList.remove("active");

    setTimeout(() => {
      navigation.classList.remove("opened");
    }, 500);
  }

  navigation.classList.add("opened");
  e.stopPropagation();
}

function closeMenu(e) {
  const isBurger = e.target.closest(".burger");
  const isNavList = e.target.classList.contains("nav__list");

  if (!isBurger && !isNavList && navList.classList.contains("active")) {
    navigation.classList.add("closed");
    page.classList.remove("open");
    navList.classList.remove("active");
    navigation.classList.remove("opened"); 
  }
}

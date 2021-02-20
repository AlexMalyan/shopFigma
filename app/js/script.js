// MENU
document.querySelector(".header__link--burger").onclick = function () {
  document.querySelector(".menu").classList.add("menu--open");
}

document.querySelector(".menu__nav-close").onclick = function () {
  document.querySelector(".menu").classList.remove("menu--open");
}
let burgerBtn = document.querySelector(".icon-burger");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".icon-close");
console.log('.icon-burger');

burgerBtn.onclick = function () {
  menu.classList.add("menu--open");
}

closeBtn.onclick = function () {
  menu.classList.remove("menu--open");
}
import { burgerActive } from "./js/burger.js";
import { sliderMoveLeft, sliderMoveRight } from "./js/slider.js";
import { createPopup } from "./js/popup.js";
document.querySelector(".burger-bg").addEventListener("click", burgerActive);
document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "index.html";
});

const burger = document.querySelector(".burger");
const burgerLinks = document.querySelectorAll(".burger-menu .navigation li");
burger.addEventListener("click", burgerActive);
for (let link of burgerLinks) {
  link.addEventListener("click", burgerActive);
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", createPopup);
});

import { burgerActive } from "./js/burger.js";
import { sliderMoveLeft, sliderMoveRight } from "./js/slider.js";

document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "index.html";
});

const burger = document.querySelector(".burger");
const burgerLinks = document.querySelectorAll(".burger-menu .navigation li");
burger.addEventListener("click", burgerActive);
for (let link of burgerLinks) {
  link.addEventListener("click", burgerActive);
}

const sliderButtonsLeft = document.querySelectorAll(".arrow-left");
const sliderButtonsRight = document.querySelectorAll(".arrow-right");
sliderButtonsLeft.forEach((buttonLeft, index) => {
  buttonLeft.addEventListener("click", sliderMoveLeft);
  sliderButtonsRight[index].addEventListener("click", sliderMoveRight);
});

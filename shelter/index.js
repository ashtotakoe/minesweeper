import { burgerActive } from "./js/burger.js";

document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "index.html";
});

const burger = document.querySelector(".burger");
burger.addEventListener("click", burgerActive);

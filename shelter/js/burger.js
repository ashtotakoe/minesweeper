export function burgerActive() {
  const burgerMenu = document.querySelector(".burger-menu");
  const burger = document.querySelector(".burger");
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
}

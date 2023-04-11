export function burgerActive() {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerBg = document.querySelector(".burger-bg");
  const burger = document.querySelector(".burger");
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerBg.classList.toggle("active");
  if (burgerBg.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "inherit";
  }
}

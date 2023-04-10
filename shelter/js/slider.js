const wrapper = document.querySelector(".card-wrapper");

function cardCount() {
  let screenWidth = screen.width;
  if (screenWidth < 721) {
    return 1;
  }
  if (screenWidth < 1111) {
    return 2;
  }
  return 3;
}

export function sliderMoveLeft(e) {}

export function sliderMoveRight(e) {
  let screenWidth = screen.width;
  wrapper.append(div);
}

//paste in index.js

/*
const sliderButtonsLeft = document.querySelectorAll(".arrow-left");
const sliderButtonsRight = document.querySelectorAll(".arrow-right");
sliderButtonsLeft.forEach((buttonLeft, index) => {
  buttonLeft.addEventListener("click", sliderMoveLeft);
  sliderButtonsRight[index].addEventListener("click", sliderMoveRight);
});

*/

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
  console.log(sliderMove(), "right");
}

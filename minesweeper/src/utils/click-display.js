export function clickDisplay(event, counterComponent, minesweeperState) {
  Object.assign(minesweeperState, { clickCounter: minesweeperState.clickCounter + 1 });
  if (event.target.textContent === '' && !event.target.classList.contains('flaged')) {
    Object.assign(counterComponent.node, { textContent: `Click count: ${minesweeperState.clickCounter}` });
  }
}

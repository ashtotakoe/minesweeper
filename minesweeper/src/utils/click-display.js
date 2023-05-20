import { minesweeperState } from './services/minesweeper-state';
// функция ни на что не должна опираться
export function clickDisplay(event, counterComponent) {
  if (event.target.textContent === '' && !event.target.classList.contains('flaged')) {
    Object.assign(counterComponent.node, { textContent: `Click count: ${++minesweeperState.clickCounter}` });
  }
}

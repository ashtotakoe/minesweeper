import { minesweeperComponents } from './services/minesweeper-components';

// функция не должна ни на что опираться
// переписать в метод комопнента
export function togglePopupClass() {
  minesweeperComponents.popup.node.classList.toggle('opened');
}

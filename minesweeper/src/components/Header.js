import { Component } from '../utils/Component';
import minesweeperState from '../utils/minesweeper-state';

export class Header extends Component {
  start() {
    const counter = new Component({
      textContent: 'Click count: 0',
      parent: this.node,
      className: 'header__item click-count',
      tag: 'p',
    });
    const heading = new Component({
      textContent: 'Minesweeper',
      parent: this.node,
      className: 'header__item heading',
      tag: 'h3',
    });
    const difficulty = new Component({
      parent: this.node,
      className: 'header__item',
      textContent: minesweeperState.difficulty,
      tag: 'p',
    });
  }
}

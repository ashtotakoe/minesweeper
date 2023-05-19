import { Component } from '../utils/component';
import { minesweeperState } from '../utils/minesweeper-state';

export class Header extends Component {
  init() {
    const heading = new Component({
      textContent: 'Minesweeper',
      parent: this.node,
      className: 'header__heading',
      tag: 'h3',
    });

    const headerData = new Component({
      parent: this.node,
      className: 'header__data',
    });
    const counter = new Component({
      textContent: 'Click count: 0',
      parent: headerData.node,
      className: 'header__data_item header__data_counter',
      tag: 'span',
    });
    const difficulty = new Component({
      parent: headerData.node,
      className: 'header__data_item header__data_difficulty',
      textContent: `Difficulty: ${minesweeperState.difficulty}`,
      tag: 'span',
    });
  }
}

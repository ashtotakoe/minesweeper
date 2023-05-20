import { Component } from '../utils/component';
import { minesweeperState } from '../utils/services/minesweeper-state';
import { minesweeperComponents } from '../utils/services/minesweeper-components';
import { togglePopupClass } from '../utils/toggle-popup-class';
import { getSquares } from '../utils/services/get-squares-count';

export class Header extends Component {
  constructor(props, extraprops) {
    super(props, extraprops);
    this.heading = new Component({
      textContent: 'Minesweeper',
      parent: this.node,
      className: 'header__heading',
      tag: 'h3',
    });
    this.headerData = new Component({
      parent: this.node,
      className: 'header__data',
    });

    this.createHeaderData();
    this.setValues();
  }

  setCustomMineCount(event) {
    if (Number(event.target.value) > 0 && Number(event.target.value) < 100) {
      minesweeperState.customSquareCount = Number(event.target.value);
      return null;
    }

    Object.assign(event.target, { value: 0 });
    return null;
  }

  createHeaderData() {
    this.setMineCount = new Component(
      {
        parent: this.headerData.node,
        className: 'header__data_item header__data_mines-count',
        tag: 'input',
      },
      {
        events: [
          {
            name: 'change',
            callback: this.setCustomMineCount,
          },
        ],
        attrs: { type: 'number', min: 1, max: 99, value: 50 },
      },
    );
    this.counter = new Component({
      textContent: 'Click count: 0',
      parent: this.headerData.node,
      className: 'header__data_item header__data_counter',
      tag: 'span',
    });
    this.difficulty = new Component({
      parent: this.headerData.node,
      className: 'header__data_item header__data_difficulty',
      textContent: `Difficulty: ${minesweeperState.difficulty}`,
      tag: 'span',
    });
    this.popupButton = new Component(
      {
        parent: this.headerData.node,
        className: 'header__data_item header__data_popup-button',
        tag: 'button',
        innerText: '\u2699',
      },
      { events: [{ name: 'click', callback: togglePopupClass }] },
    );
  }

  setValues() {
    Object.assign(minesweeperComponents, {
      heading: this.heading,
      setMineCount: this.setMineCount,
      difficulty: this.difficulty,
      counter: this.counter,
      popupButton: this.popupButton,
    });
  }
}

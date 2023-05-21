import { Component } from '../utils/component';
import { manageTimer } from '../utils/manageTimer';
import { playAudio } from '../utils/playAudio';
import { minesweeperComponents } from '../utils/services/minesweeper-components';
import { togglePopupClass } from '../utils/toggle-popup-class';

export class Controls extends Component {
  constructor(props, extraprops) {
    super(props, extraprops);

    this.timer = new Component({
      parent: this.node,
      className: 'controls__item',
      tag: 'p',
      textContent: '0:00',
    });

    this.popupButton = new Component(
      {
        parent: this.node,
        className: 'controls__item',
        tag: 'button',
        innerText: '\u2699',
      },
      { events: [{ name: 'click', callback: togglePopupClass }] },
    );
    this.soundButton = new Component({
      parent: this.node,
      className: 'controls__item',
      tag: 'button',
      textContent: 'S',
    });

    Object.assign(minesweeperComponents, { timer: this.timer });
  }
}

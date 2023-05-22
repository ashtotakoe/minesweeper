import { Component } from '../utils/component';
import { manageTimer } from '../utils/manageTimer';
import { playAudio } from '../utils/playAudio';
import { minesweeperComponents } from '../utils/services/minesweeper-components';
import { minesweeperState } from '../utils/services/minesweeper-state';
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
    this.volumeButton = new Component(
      {
        parent: this.node,
        className: 'controls__item',
        tag: 'button',
        textContent: 'M',
      },
      {
        events: [{ name: 'click', callback: this.toggleVolume }],
      },
    );

    Object.assign(minesweeperComponents, { timer: this.timer });
  }

  toggleVolume(event) {
    minesweeperState.isSoundOn = !minesweeperState.isSoundOn;
    Object.assign(event.target, { textContent: event.target.textContent === 'U' ? 'M' : 'U' });
  }
}

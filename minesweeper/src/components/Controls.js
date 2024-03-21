import { Component } from '../utils/Component';
import { minesweeperComponents } from '../utils/minesweeper-components';
import { minesweeperState } from '../utils/minesweeper-state';
import { toggleClass } from '../utils/toggle-class';

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
      { events: [{ name: 'click', callback: (event) => toggleClass(minesweeperComponents.popup.node, 'opened') }] },
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

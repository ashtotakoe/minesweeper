import { Component } from '../utils/component';
import { playAudio } from '../utils/playAudio';
import { togglePopupClass } from '../utils/toggle-popup-class';

export class Controls extends Component {
  constructor(props, extraprops) {
    super(props, extraprops);

    this.popupButton = new Component(
      {
        parent: this.node,
        className: 'controls__item',
        tag: 'button',
        innerText: '\u2699',
      },
      { events: [{ name: 'click', callback: togglePopupClass }] },
    );
    this.soundButton = new Component(
      {
        parent: this.node,
        className: 'controls__item',
        tag: 'button',
        textContent: 'S',
      },
      {
        events: [
          {
            name: 'click',
            callback: () => {
              playAudio('click');
            },
          },
        ],
      },
    );
  }
}

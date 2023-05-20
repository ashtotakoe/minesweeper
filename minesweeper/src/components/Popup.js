import { Component } from '../utils/component';
import { togglePopupClass } from '../utils/toggle-popup-class';
import { rebuildTemplate } from '../utils/rebuild-template';
import { minesweeperState } from '../utils/services/minesweeper-state';
import { minesweeperComponents } from '../utils/services/minesweeper-components';

export class Popup extends Component {
  constructor(props, extraprops) {
    super(props, extraprops);
    this.popUpBlock = new Component({ className: 'popup__block', parent: this.node });

    this.closeBtn = new Component(
      {
        className: 'popup__close',
        parent: this.popUpBlock.node,
        innerText: '\u0078',
        tag: 'button',
      },
      {
        events: [
          {
            name: 'click',
            callback: togglePopupClass,
          },
        ],
      },
    );

    this.createPopupItems();
    this.createdifficulty();
  }

  createPopupItems() {
    this.heading = new Component({
      className: 'popup__heading',
      parent: this.popUpBlock.node,
      textContent: 'Settings',
    });
    this.controls = new Component({
      className: 'popup__controls',
      parent: this.popUpBlock.node,
    });
    this.replayBtn = new Component(
      {
        className: 'popup__controls_replay',
        parent: this.controls.node,
        innerText: '\u21BB',
        tag: 'button',
      },
      { events: [{ name: 'click', callback: this.replayGame }] },
    );
    this.themeBtn = new Component(
      {
        className: 'popup__controls_theme',
        parent: this.controls.node,
        innerText: '\u263c', // 265D u263c
        tag: 'button',
      },
      { events: [{ name: 'click', callback: this.changeTheme }] },
    );
    this.difficulty = new Component({
      className: 'popup__controls_difficulty',
      parent: this.controls.node,
    });
  }

  changeDifficulty(event) {
    minesweeperState.difficulty = event.target.textContent;
    rebuildTemplate();
    togglePopupClass();
  }

  changeTheme(event) {
    let { squaresMatrix } = minesweeperState;
    const { template } = minesweeperComponents;

    squaresMatrix = squaresMatrix.map((components) =>
      components.map((component) => {
        component.node.classList.toggle('dark');
        return component;
      }),
    );
    document.body.classList.toggle('dark');
    template.node.classList.toggle('dark');

    if (event.target.innerText === '\u263c') {
      Object.assign(event.target, { innerText: '\u263e' });
      return null;
    }
    Object.assign(event.target, { innerText: '\u263c' });
    return null;
  }

  createdifficulty() {
    this.easy = new Component(
      {
        className: 'difficulty__item',
        parent: this.difficulty.node,
        tag: 'button',
        textContent: 'easy',
      },
      {
        events: [{ name: 'click', callback: this.changeDifficulty }],
      },
    );
    this.medium = new Component(
      {
        className: 'difficulty__item',
        parent: this.difficulty.node,
        tag: 'button',
        textContent: 'medium',
      },
      {
        events: [{ name: 'click', callback: this.changeDifficulty }],
      },
    );
    this.hard = new Component(
      {
        className: 'difficulty__item',
        parent: this.difficulty.node,
        tag: 'button',
        textContent: 'hard',
      },
      {
        events: [{ name: 'click', callback: this.changeDifficulty }],
      },
    );
  }

  replayGame() {
    rebuildTemplate();
    togglePopupClass();
  }
}

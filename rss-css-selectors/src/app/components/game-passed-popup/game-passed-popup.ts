import { BaseComponent } from '../../utils/base-component'

export class GamePassedPopup extends BaseComponent {
  private wrapper = new BaseComponent({
    parent: this.element,
    attribute: {
      textContent: 'congrads! you passed the game',
      className: 'game-passed-popup-wrapper__popup',
    },
  })

  constructor(parent: HTMLElement) {
    super({
      parent,
      attribute: {
        className: 'game-passed-popup-wrapper',
      },
    })
  }
}

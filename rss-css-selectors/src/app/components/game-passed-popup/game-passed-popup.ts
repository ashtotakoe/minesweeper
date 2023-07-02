import { BaseComponent } from '../../utils/base-component'

export class GamePassedPopup extends BaseComponent {
  constructor(parent: HTMLElement) {
    super({
      parent,
      attribute: {
        className: 'game-passed-popup',
      },
    })
  }
}

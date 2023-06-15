import { BaseComponent } from '../../../utils/base-component'

export class GameBoard extends BaseComponent {
  constructor(parent: HTMLElement) {
    super({ tag: 'div', attribute: { className: 'game-board' }, parent })
  }
}

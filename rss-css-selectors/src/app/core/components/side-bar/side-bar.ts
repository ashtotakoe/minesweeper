import { BaseComponent } from '../../../shared/base-component'
import { emitter } from '../../../shared/event-emitter'
import { levels } from '../../constants/levels'

export class SideBar extends BaseComponent {
  private sidebarHeading = new BaseComponent({
    tag: 'h3',
    parent: this.element,
    attribute: { className: 'side-bar__heading', textContent: 'Menu' },
  })

  private levelButtons: BaseComponent[] = []

  private levelButtonsWrapper = new BaseComponent({
    parent: this.element,
    attribute: { className: 'side-bar__level-wrapper' },
  })
  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'side-bar' } })
    this.createLevelButtons()
  }

  private createLevelButtons(): void {
    this.levelButtons = levels.map((level) => {
      const levelButton = new BaseComponent({
        tag: 'button',
        parent: this.levelButtonsWrapper.element,
        attribute: { textContent: `level ${level.serialNumber.toString()}`, className: 'level-wrapper__button' },
      })
      levelButton.element.addEventListener('click', (e) => this.switchLevel(e))
      return levelButton
    })
  }

  private switchLevel(e: Event): void {
    this.levelButtons.forEach((levelButton, buttonIndex) => {
      if (levelButton.element === e.target) {
        emitter.emit('change level', levels[buttonIndex].structure)
      }
    })
  }
}

import { BaseComponent } from '../../utils/base-component'
import { emitter } from '../../utils/event-emitter'
import { gameState } from '../../constants/game-state'
import { levels } from '../../constants/levels'
import { Level } from '../../utils/level'

export class SideBar extends BaseComponent {
  private sidebarHeading = new BaseComponent({
    tag: 'h3',
    parent: this.element,
    attribute: { className: 'side-bar__heading', textContent: 'Menu' },
  })

  private taskHolder = new BaseComponent({
    tag: 'p',
    parent: this.element,
    attribute: { className: 'side-bar__task' },
  })

  private levelButtonsWrapper = new BaseComponent({
    parent: this.element,
    attribute: { className: 'side-bar__level-wrapper' },
  })

  private levelButtons: BaseComponent[] = []

  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'side-bar' } })
    this.createLevelButtons()
    this.setTask(gameState.currentLevel)
  }

  private createLevelButtons(): void {
    this.levelButtons = levels.map((level) => {
      const levelButton = new BaseComponent({
        tag: 'button',
        parent: this.levelButtonsWrapper.element,
        attribute: { textContent: `level ${level.serialNumber.toString()}`, className: 'level-wrapper__button' },
      })
      levelButton.element.addEventListener('click', (e: Event) => this.switchLevel(e))
      return levelButton
    })
  }

  private switchLevel(e: Event): void {
    this.levelButtons.forEach((levelButton, buttonIndex) => {
      if (levelButton.element === e.target) {
        gameState.currentLevelIndex = buttonIndex
        emitter.emit('change level', levels[buttonIndex].structure)
        emitter.emit('set input text default')
        this.setTask(gameState.currentLevel)
      }
    })
  }

  private setTask(currentLevel: Level): void {
    Object.assign(this.taskHolder.element, { textContent: currentLevel.task })
  }
}

import { BaseComponent } from '../../utils/base-component'
import { emitter } from '../../utils/event-emitter'
import { gameState } from '../../constants/game-state'
import { levels } from '../../constants/levels'
import { Level } from '../../utils/level'
import { changeLevel } from '../../utils/change-level'

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

  private note = new BaseComponent({
    tag: 'p',
    parent: this.element,
    attribute: {
      className: 'side-bar__task',
      innerHTML: `
      'Note! Please separate every selector with a <b>space</b>.
      For Example: <b>.table :nth-child(1) > apple</b>
       or 
       <b>plate [cool]</b>'
      `,
    },
  })

  private levelButtons: BaseComponent[] = []

  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'side-bar' } })
    this.createLevelButtons()
    this.setTask(gameState.currentLevel)

    emitter.subscribe('set task', (currentLevel: Level) => this.setTask(currentLevel))
    emitter.subscribe('lint level', (currentLevelIndex: number) => this.lintCurrentLevel(currentLevelIndex))
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
        changeLevel(buttonIndex)
      }
    })
  }

  private setTask(currentLevel: Level): void {
    Object.assign(this.taskHolder.element, { textContent: currentLevel.task })
  }

  private lintCurrentLevel(currentLevelIndex: number): void {
    this.levelButtons.forEach((levelButton, buttonIndex) => {
      levelButton.element.classList.remove('linted')
      if (buttonIndex === currentLevelIndex) {
        levelButton.element.classList.add('linted')
      }
    })
  }
}

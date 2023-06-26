import { gameState } from '../../constants/game-state'
import { BaseComponent } from '../../utils/base-component'
import { changeLevel } from '../../utils/change-level'
import { emitter } from '../../utils/event-emitter'

export class EditorCSS extends BaseComponent {
  private answerForm = new BaseComponent({
    tag: 'input',
    parent: this.element,
    attribute: {
      className: 'editor-css__answer',
      type: 'text',
    },
  })

  private submitButton = new BaseComponent({
    tag: 'button',
    parent: this.element,
    attribute: {
      className: 'editor-css__submit-button',
      textContent: 'submit',
    },
  })

  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'editor-css' } })
    this.init()
  }

  private init(): void {
    this.setInputTextDefault()

    this.answerForm.element.addEventListener('click', this.inputEventHandler)
    this.submitButton.element.addEventListener('click', (e: Event) => this.submitEventHandler(e))
    document.body.addEventListener('keypress', (e: Event) => this.submitEventHandler(e))

    emitter.subscribe('set input text default', () => {
      this.setInputTextDefault()
    })
  }

  private inputEventHandler(e: Event): boolean {
    if (!gameState.isInputFitstTimeClicked) {
      return false
    }
    if (e.target instanceof HTMLInputElement) {
      e.target.value = ''
      gameState.isInputFitstTimeClicked = false
    }
    return true
  }

  private setInputTextDefault(): void {
    if (this.answerForm.element instanceof HTMLInputElement) {
      this.answerForm.element.value = 'type your selector here'
    }
  }

  private submitEventHandler(e: Event): boolean {
    if (e instanceof KeyboardEvent && e.code !== 'Enter') {
      return false
    }

    if (this.answerForm.element instanceof HTMLInputElement) {
      if (gameState.currentLevel.answer.includes(this.answerForm.element.value)) {
        gameState.currentLevelIndex += 1
        changeLevel(gameState.currentLevelIndex)
        return true
      }
    }

    return true
  }
}

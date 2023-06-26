import { gameState } from '../../constants/game-state'
import { BaseComponent } from '../../utils/base-component'
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
    this.answerForm.element.addEventListener('click', this.inputClickHandler)

    emitter.subscribe('set input text default', () => {
      this.setInputTextDefault()
    })
  }

  private inputClickHandler(e: Event): boolean {
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
}

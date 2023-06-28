import { gameElementAbstractions } from '../../constants/game-element-abstractions'
import { gameState } from '../../constants/game-state'
import { BaseComponent } from '../../utils/base-component'
import { changeLevel } from '../../utils/change-level'
import { emitter } from '../../utils/event-emitter'
import { GameElements } from '../game-elements/game-elements'

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
  public gameElements: GameElements

  constructor(parent: HTMLElement, gameElements: GameElements) {
    super({ parent, attribute: { className: 'editor-css' } })
    this.gameElements = gameElements
    this.init()
  }

  private init(): void {
    this.setInputTextDefault()

    this.answerForm.element.addEventListener('click', () => this.inputEventHandler())
    this.submitButton.element.addEventListener('click', (e: Event) => this.submitEventHandler(e))
    document.body.addEventListener('keypress', (e: Event) => this.submitEventHandler(e))
    document.body.addEventListener('keypress', () => this.inputEventHandler())

    emitter.subscribe('set input text default', () => {
      this.setInputTextDefault()
    })
  }

  private inputEventHandler(): boolean {
    if (!gameState.isInputFitstTimeClicked) {
      return false
    }
    if (this.answerForm.element instanceof HTMLInputElement) {
      Object.assign(this.answerForm.element, { value: '' })
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
      if (this.validateAnswer(this.answerForm.element.value)) {
        gameState.currentLevelIndex += 1
        changeLevel(gameState.currentLevelIndex)
        return true
      }
    }

    return true
  }

  private validateAnswer(selector: string): boolean {
    const properSelector = this.turnIntoProperSelector(selector)
    const target = this.gameElements.abstractDOMModel.querySelector(properSelector)

    if (target === null || target?.getAttribute('data-target') === null) {
      return false
    }

    console.log('you guessed it right!')

    return true
  }

  private turnIntoProperSelector(selector: string): string {
    const properSelector = selector.replaceAll('data-target', '').split(' ')

    return properSelector
      .map((keyword) => {
        let properKeyWord = keyword
        Object.keys(gameElementAbstractions).forEach((abstraction) => {
          if (keyword === abstraction) {
            properKeyWord = gameElementAbstractions[abstraction]
          }
        })
        return properKeyWord
      })
      .join(' ')
  }
}

import { BaseComponent } from '../../shared/base-component'

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
    if (this.answerForm.element instanceof HTMLInputElement) {
      this.answerForm.element.value = 'type your selector here'
    }
    this.init()
  }

  private init(): void {
    this.answerForm.element.addEventListener('click', (e) => {
      if (e.target instanceof HTMLInputElement) {
        e.target.value = ''
      }
    })
  }
}

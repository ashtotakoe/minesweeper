import { BaseComponent } from '../../utils/base-component'
import { emitter } from '../../utils/event-emitter'

export class EditorWrapper extends BaseComponent {
  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'editor-wrapper' } })
    emitter.subscribe('display error', () => this.wrongAnswerDisplay())
  }

  public wrongAnswerDisplay(): void {
    this.element.classList.add('wrong')
    setTimeout(() => {
      this.element.classList.remove('wrong')
    }, 400)
  }
}

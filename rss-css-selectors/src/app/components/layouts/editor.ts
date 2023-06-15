import { BaseComponent } from '../../../utils/base-component'

export class Editor extends BaseComponent {
  private cssEditor = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'editor-wrapper__editor',
    },
  })
  private htmlEditor = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'editor-wrapper__editor',
    },
  })
  constructor(parent: HTMLElement) {
    super({ tag: 'div', parent, attribute: { className: 'editor-wrapper' } })
  }
}

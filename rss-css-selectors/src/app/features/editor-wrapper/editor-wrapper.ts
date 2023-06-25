import { BaseComponent } from '../../shared/base-component'

export class EditorWrapper extends BaseComponent {
  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'editor-wrapper' } })
  }
}

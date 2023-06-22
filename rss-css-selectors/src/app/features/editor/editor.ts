import { BaseComponent } from '../../shared/base-component'

export class Editor extends BaseComponent {
  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'editor' } })
  }
}

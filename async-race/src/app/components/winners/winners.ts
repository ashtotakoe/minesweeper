import { BaseComponent } from 'src/app/utils/base-component'

export class Winners extends BaseComponent {
  constructor(parent: HTMLElement) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'winners',
        textContent: 'winners works!',
      },
    })
  }
}

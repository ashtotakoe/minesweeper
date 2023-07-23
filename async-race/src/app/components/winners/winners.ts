import { BaseComponent } from 'src/app/utils/base-component'

export class Winners extends BaseComponent {
  constructor() {
    super({
      tag: 'div',
      attribute: {
        className: 'winners',
        textContent: 'winners works!',
      },
    })
  }
}

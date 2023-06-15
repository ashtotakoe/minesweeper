import { BaseComponent } from '../../../utils/base-component'

export class Header extends BaseComponent {
  private heading = new BaseComponent({
    tag: 'h1',
    parent: this.element,
    attribute: { textContent: 'RSS-CSS-Selectors', className: 'header__heading' },
  })
  private menuButton = new BaseComponent({
    tag: 'button',
    parent: this.element,
    attribute: { className: 'header__menu-button', textContent: 'menu' },
  })

  constructor(parent: HTMLElement) {
    super({ tag: 'div', parent, attribute: { className: 'header' } })
  }
}

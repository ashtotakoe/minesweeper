import { BaseComponent } from '../../../utils/base-component'

export class SideBar extends BaseComponent {
  private sidebarHeading = new BaseComponent({
    tag: 'h3',
    parent: this.element,
    attribute: { className: 'side-bar__heading', textContent: 'Menu' },
  })
  constructor(parent: HTMLElement) {
    super({ parent, attribute: { className: 'side-bar' } })
  }
}

import { BaseComponent } from 'src/app/utils/base-component'

export class Header extends BaseComponent {
  private heading = new BaseComponent({
    tag: 'h1',
    parent: this.element,
    attribute: {
      className: 'header__heading',
      textContent: 'Async Race',
    },
  })

  private navigation = new BaseComponent({
    tag: 'nav',
    parent: this.element,
    attribute: {
      className: 'header__navigation',
    },
  })

  constructor(parent: HTMLElement) {
    super({
      tag: 'header',
      parent,
      attribute: {
        className: 'header',
      },
    })

    this.createNavButtons()
  }

  private createNavButtons(): void {
    const garageBtn = new BaseComponent({
      tag: 'button',
      parent: this.navigation.element,
      attribute: {
        className: 'header__navigation-button',
        innerHTML: 'to garage',
      },
    })

    const winnersBtn = new BaseComponent({
      tag: 'button',
      parent: this.navigation.element,
      attribute: {
        className: 'header__navigation-button',
        innerHTML: 'to winners',
      },
    })

    garageBtn.element.addEventListener('click', () => {
      console.log('garage button clicked')
    })

    winnersBtn.element.addEventListener('click', () => {
      console.log('winners button clicked')
    })
  }
}

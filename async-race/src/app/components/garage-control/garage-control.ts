import { BaseComponent } from 'src/app/utils/base-component'
import { CarInput } from '../car-input/car-input'

export class GarageControl extends BaseComponent {
  private container = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'garage-control__container',
    },
  })

  private createCar = new CarInput(this.container.element, 'create')

  private modifyCar = new CarInput(this.container.element, 'modify')

  private controlButtons = new BaseComponent({
    tag: 'div',
    parent: this.container.element,
    attribute: {
      className: 'garage-control__controls-wrapper',
    },
  })

  private startRace = new BaseComponent({
    tag: 'button',
    parent: this.controlButtons.element,
    attribute: {
      className: 'garage-control__button',
      textContent: 'race',
    },
  })

  private resetRace = new BaseComponent({
    tag: 'button',
    parent: this.controlButtons.element,
    attribute: {
      className: 'garage-control__button',
      textContent: 'reset',
    },
  })

  private generateCars = new BaseComponent({
    tag: 'button',
    parent: this.controlButtons.element,
    attribute: {
      className: 'garage-control__button',
      textContent: 'generate',
    },
  })

  constructor(parent: HTMLElement) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'garage-control',
      },
    })
  }
}

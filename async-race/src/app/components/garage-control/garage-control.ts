import { BaseComponent } from 'src/app/utils/base-component'
import { carsDummyData } from 'src/app/consts/cars-dummy-data'
import { createCar } from 'src/app/utils/create-car'
import { emitter } from 'src/app/utils/event-emitter'
import { ModifyCarInput } from '../modify-car-input/modify-car-input'
import { CreateCarInput } from '../create-car-input/create-car-input'

export class GarageControl extends BaseComponent {
  private container = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'garage-control__container',
    },
  })

  private createCar = new CreateCarInput(this.container.element, 'create')

  private modifyCar = new ModifyCarInput(this.container.element, 'modify')

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

    this.generateCars.element.addEventListener('click', () => this.generateMoreCars())
  }

  private generateMoreCars(): void {
    carsDummyData.forEach((carData) => {
      createCar(carData).then(() => {
        emitter.emit('render cars')
      })
    })
  }
}

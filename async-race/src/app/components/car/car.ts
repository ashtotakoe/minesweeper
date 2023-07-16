import { CarData } from '../../models/car-data'
import { BaseComponent } from '../../utils/base-component'

export class Car extends BaseComponent {
  private carData: CarData

  private carName = new BaseComponent({
    tag: 'h4',
    parent: this.element,
    attribute: {
      className: 'car__name',
    },
  })

  private carModel = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'car__model',
    },
  })

  private road = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'car__road',
    },
  })

  constructor(parent: HTMLElement, carData: CarData) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'car',
      },
    })

    this.carData = carData
    this.setCarName()
  }

  private setCarName(): void {
    Object.assign(this.carName.element, {
      textContent: this.carData.name,
    })
  }
}

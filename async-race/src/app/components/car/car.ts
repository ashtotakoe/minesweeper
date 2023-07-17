import { CarData } from 'src/app/models/car-data'
import { BaseComponent } from 'src/app/utils/base-component'

export class Car extends BaseComponent {
  private carData: CarData

  public isDriving = false

  private carModel = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'car__model',
    },
  })
  constructor(parent: HTMLElement, data: CarData) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'car-cell__car car',
      },
    })

    this.carData = data
  }

  public startDrive(calculations: Record<string, number>): void {
    console.log('calculations')
    console.log(calculations)

    let tempLength = calculations.relativeSpeed
    const intervalId = setInterval(() => {
      if (!this.isDriving) {
        clearInterval(intervalId)
      }

      this.carModel.element.style.marginLeft = `${String(Math.round(tempLength))}px`
      tempLength += calculations.relativeSpeed
    }, 10)
  }
}

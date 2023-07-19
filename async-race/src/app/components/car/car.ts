import { CarData } from 'src/app/models/car-data'
import { BaseComponent } from 'src/app/utils/base-component'
import { httpFetcher } from 'src/app/utils/http-fetcher'

export class Car extends BaseComponent {
  private carData: CarData
  private id: number

  public isDriving = false

  private carModel = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'car__model',
    },
  })
  constructor(parent: HTMLElement, data: CarData, id: number) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'car-cell__car car',
      },
    })

    this.id = id
    this.carData = data
  }

  public startDrive(relativeSpeed: number, roadLength: number): void {
    let passedPath = relativeSpeed
    const intervalId = setInterval(() => {
      if (!this.isDriving) {
        clearInterval(intervalId)
      }

      if (passedPath > roadLength) {
        this.isDriving = false
        httpFetcher.stopEngine(this.id)
      }

      this.carModel.element.style.marginLeft = `${String(Math.round(passedPath))}px`
      passedPath += relativeSpeed
    }, 10)
  }
}

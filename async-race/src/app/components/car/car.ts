import { CarData } from 'src/app/models/car-data'
import { BaseComponent } from 'src/app/utils/base-component'
import { httpFetcher } from 'src/app/utils/http-fetcher'
import { bringCarBackToStart } from 'src/app/utils/bring-car-back-to-start'
import { buildSvgSprite } from 'src/app/utils/build-svg-sprite'

export class Car extends BaseComponent {
  private carData: CarData
  private id: number

  public isDriving = false
  public areBrakesAktivated = false

  private carModel = buildSvgSprite(this.element, './icons/car.svg#car')

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

    this.carModel.style.fill = this.carData.color
  }

  public get passedPath(): number {
    const style = getComputedStyle(this.carModel).marginLeft
    return Number(style.slice(0, style.length - 2))
  }

  public set passedPath(value: number) {
    this.carModel.style.marginLeft = `${value}px`
  }

  public startDrive(relativeSpeed: number, roadLength: number): void {
    let passedPath = relativeSpeed
    const intervalId = setInterval(() => {
      if (!this.isDriving) {
        clearInterval(intervalId)
      }

      if (this.areBrakesAktivated) {
        bringCarBackToStart(this)
      }

      this.passedPath = passedPath
      passedPath += relativeSpeed

      if (passedPath > roadLength) {
        this.isDriving = false
        httpFetcher.stopEngine(this.id)
      }
    }, 10)
  }
}

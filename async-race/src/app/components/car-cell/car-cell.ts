import { httpFetcher } from 'src/app/utils/http-fetcher'
import { EngineStartedResponse } from 'src/app/models/engine-started-response'
import { CarData } from '../../models/car-data'
import { BaseComponent } from '../../utils/base-component'
import { Car } from '../car/car'

export class CarCell extends BaseComponent {
  private carData: CarData
  private car: Car
  private id: number

  private carName = new BaseComponent({
    tag: 'h4',
    parent: this.element,
    attribute: {
      className: 'car-cell__name',
    },
  })
  private carControls = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'car-cell__controls',
    },
  })

  private driveButton = new BaseComponent({
    tag: 'button',
    parent: this.carControls.element,
    attribute: {
      className: 'car-cell__btn',
      textContent: 'A',
    },
  })

  private stopButton = new BaseComponent({
    tag: 'button',
    parent: this.carControls.element,
    attribute: {
      className: 'car-cell__btn',
      textContent: 'B',
    },
  })

  private road: BaseComponent | null = null

  constructor(parent: HTMLElement, carData: CarData, id: number) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'car-cell',
      },
    })
    this.carData = carData
    this.car = new Car(this.element, carData)
    this.id = id

    this.setCarName()
    this.renderRoad()

    this.driveButton.element.addEventListener('click', () => this.startDrive())
    this.stopButton.element.addEventListener('click', () => this.stopDrive())
  }

  private startDrive(): boolean {
    if (this.car.isDriving || !this.road) {
      return false
    }
    this.car.isDriving = true
    const roadLength = this.road.element.offsetWidth

    httpFetcher.startEngine(this.id).then((data: EngineStartedResponse) => {
      const calculations = this.makeCalculations(roadLength, data)
      this.car.startDrive(calculations)
    })
    return true
  }

  private stopDrive(): void {
    httpFetcher.stopEngine(this.id).then((response: Response) => {
      if (response.status === 200) {
        this.car.isDriving = false
      }
    })
  }

  private makeCalculations(roadLength: number, data: EngineStartedResponse): Record<string, number> {
    const rideTime = Math.round(data.distance / data.velocity)
    const relativeSpeed = roadLength / (rideTime / 10)

    console.log(`response`)
    console.log(data)

    return { rideTime, relativeSpeed }
  }

  private setCarName(): void {
    Object.assign(this.carName.element, {
      textContent: this.carData.name,
    })
  }

  private renderRoad(): void {
    this.road = new BaseComponent({
      tag: 'div',
      parent: this.element,
      attribute: {
        className: 'car-cell__road',
      },
    })
  }
}

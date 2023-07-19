import { httpFetcher } from 'src/app/utils/http-fetcher'
import { EngineStartedData } from 'src/app/models/engine-started-response'
import { StartEngineReturnProps } from 'src/app/models/start-engine-return-props'
import { distanceFromEndToFlag } from 'src/app/consts/distans-from-end-to-flag'
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
  private flag = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'car-cell__flag',
    },
  })

  constructor(parent: HTMLElement, carData: CarData, id: number) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'car-cell',
      },
    })
    this.carData = carData
    this.car = new Car(this.element, carData, id)
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
    const roadLength = this.road.element.offsetWidth - distanceFromEndToFlag

    httpFetcher.startEngine(this.id).then(({ engineStartedData, driveModeResponse }: StartEngineReturnProps) => {
      const relativeSpeed = this.getRelativeSpeed(roadLength, engineStartedData)
      this.car.startDrive(relativeSpeed, roadLength)

      driveModeResponse.then((response) => {
        if (response.status === 500) {
          this.car.isDriving = false
          return
        }
        console.log('ride is finished succesfully!')
      })
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

  private getRelativeSpeed(roadLength: number, data: EngineStartedData): number {
    const rideTime = Math.round(data.distance / data.velocity)
    const relativeSpeed = roadLength / (rideTime / 10)

    return relativeSpeed
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

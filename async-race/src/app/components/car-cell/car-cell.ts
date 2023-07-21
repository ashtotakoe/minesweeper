import { httpFetcher } from 'src/app/utils/http-fetcher'
import { EngineStartedData } from 'src/app/models/engine-started-response'
import { StartEngineReturnProps } from 'src/app/models/start-engine-return-props'
import { distanceFromEndToFlag } from 'src/app/consts/distance-from-end-to-flag'
import { RequestStatuses } from 'src/app/enum/request-statuses'
import { gameState } from 'src/app/utils/game-state'
import { emitter } from 'src/app/utils/event-emitter'
import { CarData } from '../../models/car-data'
import { BaseComponent } from '../../utils/base-component'
import { Car } from '../car/car'

export class CarCell extends BaseComponent {
  private carData: CarData
  private car: Car

  private carName = new BaseComponent({
    tag: 'h4',
    parent: this.element,
    attribute: {
      className: 'car-cell__name',
    },
  })

  private deleteButton = new BaseComponent({
    tag: 'button',
    parent: this.element,
    attribute: {
      className: 'car-cell__button',
      textContent: 'delete',
    },
  })

  private slectButton = new BaseComponent({
    tag: 'button',
    parent: this.element,
    attribute: {
      className: 'car-cell__button',
      textContent: 'select',
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
      className: 'car-cell__button',
      textContent: 'A',
    },
  })

  private stopButton = new BaseComponent({
    tag: 'button',
    parent: this.carControls.element,
    attribute: {
      className: 'car-cell__button',
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

  constructor(parent: HTMLElement, carData: CarData) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'car-cell',
      },
    })

    this.carData = carData
    this.car = new Car(this.element, carData, carData.id)

    this.setCarName()
    this.renderRoad()

    this.driveButton.element.addEventListener('click', () => this.startDrive())
    this.stopButton.element.addEventListener('click', () => this.stopDrive())

    this.slectButton.element.addEventListener('click', () => {
      gameState.modifyingCarId = this.carData.id
    })

    this.deleteButton.element.addEventListener('click', () => this.deleteCar())
  }

  private startDrive(): boolean {
    if (this.car.isDriving || !this.road || this.car.passedPath) {
      return false
    }

    this.car.isDriving = true
    this.car.areBrakesAktivated = false
    const roadLength = this.road.element.offsetWidth - distanceFromEndToFlag

    httpFetcher
      .startEngine(this.carData.id)
      .then(({ engineStartedData, driveModeResponse }: StartEngineReturnProps) => {
        const relativeSpeed = this.getRelativeSpeed(roadLength, engineStartedData)
        this.car.startDrive(relativeSpeed, roadLength)

        driveModeResponse.then((response) => {
          if (response.status === RequestStatuses.ServerError) {
            this.car.isDriving = false
            return
          }
          console.log('ride is finished succesfully!')
        })
      })
    return true
  }

  private stopDrive(): void {
    if (this.car.passedPath === 0) {
      return
    }

    if (!this.car.isDriving) {
      this.car.passedPath = 0
      return
    }

    httpFetcher.stopEngine(this.carData.id).then((response: Response) => {
      if (response.status === RequestStatuses.Success) {
        this.car.isDriving = false
        this.car.areBrakesAktivated = true
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

  private deleteCar(): void {
    httpFetcher.deleteCar(this.carData.id).then(() => {
      emitter.emit('render cars')
    })
  }
}

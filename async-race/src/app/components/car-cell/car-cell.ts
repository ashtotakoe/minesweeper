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
  public carData: CarData
  private car: Car
  private road: BaseComponent | null = null

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

  public async startDrive(): Promise<void> {
    if (this.car.isDriving || !this.road || this.car.passedPath) {
      return
    }

    this.car.isDriving = true
    this.car.areBrakesAktivated = false
    const roadLength = this.road.element.offsetWidth - distanceFromEndToFlag

    const { engineStartedData, driveModeResponse }: StartEngineReturnProps = await httpFetcher.startEngine(
      this.carData.id,
    )

    const relativeSpeed = this.getRelativeSpeed(roadLength, engineStartedData)
    this.car.startDrive(relativeSpeed, roadLength)

    const resolvedDriveModeResponse = await driveModeResponse
    if (resolvedDriveModeResponse.status === RequestStatuses.ServerError) {
      this.car.isDriving = false
      if (this.isRaceOver()) {
        this.showRaceResults()
      }
      return
    }
    console.log('ride is finished succesfully!')

    if (!gameState.isRaceGoing) {
      return
    }

    gameState.finishers.push(this.car)
    if (this.isRaceOver()) {
      this.showRaceResults()
    }
  }

  private showRaceResults(): void {
    gameState.isRaceGoing = false
    console.log('race is finished')
    console.log(gameState.finishers[0])
  }

  private isRaceOver(): boolean {
    if (!gameState.isRaceGoing) {
      return false
    }

    return !this.isAnyoneStillDriving()
  }

  private isAnyoneStillDriving(): boolean {
    if (!gameState.carCells) {
      return false
    }
    return gameState.carCells.some((carCell) => carCell.car.isDriving)
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

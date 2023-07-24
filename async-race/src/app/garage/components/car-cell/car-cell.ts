import { httpFetcherGarage } from 'src/app/garage/services/http-fetcher-garage'
import { EngineStartedData } from 'src/app/garage/models/engine-started-response'
import { StartEngineReturnProps } from 'src/app/garage/models/start-engine-return-props'
import { distanceFromEndToFlag } from 'src/app/garage/consts/distance-from-end-to-flag'
import { RequestStatuses } from 'src/app/enums/request-statuses'
import { gameState } from 'src/app/utils/game-state'
import { emitter } from 'src/app/utils/event-emitter'
import { saveWinner } from 'src/app/utils/save-winner'
import { Car } from 'src/app/shared/components/car/car'
import { CarData } from '../../../models/car-data'
import { BaseComponent } from '../../../utils/base-component'

export class CarCell extends BaseComponent {
  public carData: CarData
  public car: Car
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
    this.car = new Car(this.element, carData)

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

    const { engineStartedData, driveModeResponse }: StartEngineReturnProps = await httpFetcherGarage.startEngine(
      this.carData.id,
    )

    const [relativeSpeed, rideTime] = this.makeCalculations(roadLength, engineStartedData)
    this.car.startDrive(relativeSpeed, roadLength)

    const resolvedDriveModeResponse = await driveModeResponse
    if (resolvedDriveModeResponse.status === RequestStatuses.ServerError) {
      this.car.isDriving = false
      return
    }
    console.log('ride is finished succesfully!')

    if (!gameState.isRaceGoing) {
      return
    }

    if (this.checkIsWinner()) {
      gameState.raceWinnerTime = rideTime
      gameState.raceWinner = this.car
      saveWinner()

      console.log('winner s time ', rideTime)
      console.log(`${this.carData.name} is the winner`)
    }
  }

  private checkIsWinner(): boolean {
    return !gameState.raceWinner
  }

  public async stopDrive(): Promise<void> {
    if (this.car.passedPath === 0) {
      return
    }

    if (!this.car.isDriving) {
      this.car.passedPath = 0
      return
    }

    const response = await httpFetcherGarage.stopEngine(this.carData.id)
    if (response.status === RequestStatuses.Success) {
      this.car.isDriving = false
      this.car.areBrakesAktivated = true
    }
  }

  private makeCalculations(roadLength: number, data: EngineStartedData): number[] {
    const rideTime = Math.round(data.distance / data.velocity)
    const relativeSpeed = roadLength / (rideTime / 10)

    return [relativeSpeed, rideTime]
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

  private async deleteCar(): Promise<void> {
    await httpFetcherGarage.deleteCar(this.carData.id)
    emitter.emit('render cars')
    emitter.emit('render winners')
  }
}

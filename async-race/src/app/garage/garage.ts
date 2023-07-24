import { BaseComponent } from 'src/app/utils/base-component'
import { httpFetcherGarage } from 'src/app/garage/services/http-fetcher-garage'
import { CarData } from 'src/app/models/car-data'
import { emitter } from 'src/app/utils/event-emitter'
import { gameState } from 'src/app/utils/game-state'
import { CarCell } from './components/car-cell/car-cell'
import { Pagination } from '../shared/components/pagination/pagination'
import { GarageControl } from './components/garage-control/garage-control'

export class Garage extends BaseComponent {
  private carsData: CarData[] | null = null
  public carCells: CarCell[] | null = null

  private heading = new BaseComponent({
    tag: 'h2',
    parent: this.element,
    attribute: {
      className: 'garage__heading',
      textContent: 'Garage',
    },
  })

  private carCreator = new GarageControl(this.element)

  private carsWrapper = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'garage__cars-wrapper',
    },
  })

  private pagination = new Pagination(this.element, (paginationType: 'next' | 'previous') =>
    this.paginationHandler(paginationType),
  )
  constructor() {
    super({
      tag: 'div',
      attribute: {
        className: 'garage',
      },
    })
    emitter.subscribe('render cars', () => this.renderCars())
    emitter.subscribe('start race', () => this.startRace())

    this.renderCars()
  }

  private startRace(): void {
    if (!this.carCells || this.carCells.length === 1 || this.carCells.some((carCell) => carCell.car.passedPath !== 0)) {
      console.log('sorry, there should be more than 1 car to start the race')
      console.log('also all cars should be on start line')
      return
    }

    gameState.isRaceGoing = true
    gameState.raceWinner = null
    gameState.raceWinnerTime = 0

    this.carCells.forEach((carCell) => {
      carCell.startDrive()
    })
  }

  private paginationHandler(paginationType: 'previous' | 'next'): void {
    if (paginationType === 'next') {
      gameState.currentGaragePage += 1
      this.renderCars()
      return
    }

    if (gameState.currentGaragePage === 1) {
      return
    }

    gameState.currentGaragePage -= 1
    this.renderCars()
  }

  private renderCars(): void {
    httpFetcherGarage.getCars({ isPaginationRequiered: true }).then((carsData) => {
      if (!carsData.length) {
        gameState.currentGaragePage -= 1
        return
      }

      this.carsWrapper.element.replaceChildren()

      this.changeGarageCount()

      this.carsData = carsData
      this.carCells = this.carsData.map((carData) => new CarCell(this.carsWrapper.element, carData))
      gameState.carCells = this.carCells
    })
  }

  private changeGarageCount(): void {
    httpFetcherGarage.getCars({ isPaginationRequiered: false }).then((carsData) => {
      Object.assign(this.heading.element, {
        textContent: `Garage (${carsData.length} cars, currently on page ${gameState.currentGaragePage})`,
      })
    })
  }
}

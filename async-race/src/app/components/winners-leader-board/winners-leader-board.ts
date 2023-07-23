import { BaseComponent } from 'src/app/utils/base-component'
import { WinnerData } from 'src/app/models/winner-data'
import { httpFetcher } from 'src/app/utils/http-fetcher'
import { emitter } from 'src/app/utils/event-emitter'
import { CarData } from 'src/app/models/car-data'
import { WinnerCell } from '../winner-cell/winner-cell'

export class WinnersLeaderBoard extends BaseComponent {
  private winnerElements: WinnerCell[] = []

  private combinedWinnersData: (WinnerData & CarData)[] = []

  constructor() {
    super({
      tag: 'div',
      attribute: {
        className: 'winners-leader-board',
      },
    })
    this.renderWinners()
    emitter.subscribe('render winners', () => this.renderWinners())
  }

  private async renderWinners(): Promise<void> {
    console.log('START RENDERING WINNERS...')

    this.element.replaceChildren()
    await this.setData()

    this.winnerElements = this.combinedWinnersData.map((combinedData) => new WinnerCell(combinedData, this.element))
  }

  private async setData(): Promise<void> {
    const winnersData: WinnerData[] = await httpFetcher.getWinners()

    const carsPromises = winnersData.map((winner) => httpFetcher.getCar(winner.id))

    const carsData = await Promise.all(carsPromises)

    this.combinedWinnersData = winnersData.map((winner, index) => Object.assign(winner, carsData[index]))
    console.log(this.combinedWinnersData)
  }
}

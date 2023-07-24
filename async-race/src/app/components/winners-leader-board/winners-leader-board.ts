import { BaseComponent } from 'src/app/utils/base-component'
import { WinnerData } from 'src/app/models/winner-data'
import { httpFetcher } from 'src/app/utils/http-fetcher'
import { winnerTableHeaders } from 'src/app/consts/winner-table-headers'
import { CarData } from 'src/app/models/car-data'
import { httpFetcherWinners } from 'src/app/utils/http-fetcher-winners'
import { WinnerCell } from '../winner-cell/winner-cell'

export class WinnersLeaderBoard extends BaseComponent {
  private winnerElements: WinnerCell[] = []

  private combinedWinnersData: (WinnerData & CarData)[] = []

  constructor(parent: HTMLElement) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'winners-leader-board',
      },
    })
  }

  public async renderWinners(): Promise<void> {
    this.element.replaceChildren()

    this.setTableHeaders()
    await this.setData()

    this.winnerElements = this.combinedWinnersData.map(
      (combinedData, index) => new WinnerCell(combinedData, this.element, index + 1),
    )
  }

  private async setData(): Promise<void> {
    const winnersData: WinnerData[] = await httpFetcherWinners.getWinners()

    const carsPromises = winnersData.map((winner) => httpFetcher.getCar(winner.id))

    const carsData = await Promise.all(carsPromises)

    this.combinedWinnersData = winnersData.map((winner, index) => Object.assign(winner, carsData[index]))
    console.log(this.combinedWinnersData)
  }

  private setTableHeaders(): void {
    const headersRow = new BaseComponent({
      tag: 'div',
      parent: this.element,
      attribute: {
        className: 'winners-leader-board__headers-row headers-row',
      },
    })

    winnerTableHeaders.forEach(
      (header) =>
        new BaseComponent({
          tag: 'div',
          parent: headersRow.element,
          attribute: {
            className: 'headers-row__header',
            textContent: header,
          },
        }),
    )
  }
}

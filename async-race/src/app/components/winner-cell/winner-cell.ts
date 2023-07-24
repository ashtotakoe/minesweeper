import { BaseComponent } from 'src/app/utils/base-component'
import { WinnerData } from 'src/app/models/winner-data'
import { CarData } from 'src/app/models/car-data'
import { Car } from '../car/car'

export class WinnerCell extends BaseComponent {
  private data?: WinnerData & CarData
  private winnerCarModel: Car
  private winnerCellElements: HTMLCollection

  private winnerId = new BaseComponent({
    tag: 'p',
    parent: this.element,
    attribute: {
      className: 'winner-cell__data',
    },
  })

  private winnerName = new BaseComponent({
    tag: 'p',
    parent: this.element,
    attribute: {
      className: 'winner-cell__data',
    },
  })

  private winsCount = new BaseComponent({
    tag: 'p',
    parent: this.element,
    attribute: {
      className: 'winner-cell__data',
    },
  })

  private bestTime = new BaseComponent({
    tag: 'p',
    parent: this.element,
    attribute: {
      className: 'winner-cell__data',
    },
  })

  constructor(data: WinnerData & CarData, parent: HTMLElement) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'winner-cell',
      },
    })

    this.data = data

    this.winnerCellElements = this.element.children

    this.setData()

    const { id, name, color } = this.data

    this.winnerCarModel = new Car(this.element, { id, name, color })
  }

  private setData(): void {
    if (!this.data) {
      return
    }

    const { id, name, wins, time } = this.data

    Array.from([id, name, wins, time]).forEach((value, index) => {
      Object.assign(this.winnerCellElements[index], {
        textContent: value,
      })
    })
  }
}

import { BaseComponent } from 'src/app/utils/base-component'
import { WinnerData } from 'src/app/models/winner-data'
import { CarData } from 'src/app/models/car-data'
import { Car } from '../car/car'

export class WinnerCell extends BaseComponent {
  private data?: WinnerData & CarData
  private winnerCarModel: Car

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

    this.setData()

    this.winnerCarModel = new Car(this.element, {
      id: this.data.id,
      name: this.data.name,
      color: this.data.color,
    })
  }

  private setData(): void {
    if (!this.data) {
      return
    }

    Object.assign(this.winnerId.element, {
      textContent: this.data.id,
    })
    Object.assign(this.winnerName.element, {
      textContent: this.data.name,
    })
    Object.assign(this.winsCount.element, {
      textContent: this.data.wins,
    })
    Object.assign(this.bestTime.element, {
      textContent: this.data.time,
    })
  }
}

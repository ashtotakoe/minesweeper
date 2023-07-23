import { BaseComponent } from 'src/app/utils/base-component'
import { WinnerData } from 'src/app/models/winner-data'
import { CarData } from 'src/app/models/car-data'

export class WinnerCell extends BaseComponent {
  private data?: WinnerData & CarData

  private winnerName = new BaseComponent({
    tag: 'h4',
    parent: this.element,
    attribute: {
      className: 'winner-cell__name',
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
    this.winnerName.element.textContent = data.name
  }
}

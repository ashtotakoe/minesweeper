import { BaseComponent } from 'src/app/utils/base-component'
import { httpFetcher } from 'src/app/utils/http-fetcher'
import { CarData } from 'src/app/models/car-data'
import { Car } from 'src/app/components/car/car'

export class Garage extends BaseComponent {
  private heading = new BaseComponent({
    tag: 'h1',
    parent: this.element,
    attribute: {
      className: 'garage__heading',
      textContent: 'Garage',
    },
  })

  private carsWrapper = new BaseComponent({
    tag: 'div',
    parent: this.element,
    attribute: {
      className: 'garage__cars-wrapper',
    },
  })

  private carsData: CarData[] | undefined

  constructor(parent: HTMLElement) {
    super({
      tag: 'div',
      parent,
      attribute: {
        className: 'garage',
      },
    })

    httpFetcher.getCars().then((cars) => {
      this.carsData = cars
      this.renderCars()
    })
  }

  private renderCars(): Car[] | null {
    if (this.carsData) {
      return this.carsData.map((car) => new Car(this.carsWrapper.element, car))
    }

    return null
  }
}

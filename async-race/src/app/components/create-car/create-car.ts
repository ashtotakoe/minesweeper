import { httpFetcher } from 'src/app/utils/http-fetcher'
import { emitter } from 'src/app/utils/event-emitter'
import { CarInput } from '../car-input/car-input'

export class CreateCar extends CarInput {
  constructor(parent: HTMLElement, submitTextContent: string) {
    super(parent, submitTextContent)
    this.submitButton.element.addEventListener('click', () => this.createCar())
  }

  private createCar(): void {
    httpFetcher
      .createCar({
        name: this.nameInput.inputValue || 'default name',
        color: this.colorInput.inputValue,
      })
      .then(() => {
        emitter.emit('render cars')
      })
  }
}

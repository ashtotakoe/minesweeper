import { createCar } from 'src/app/utils/create-car'
import { emitter } from 'src/app/utils/event-emitter'
import { CarInput } from '../car-input/car-input'

export class CreateCarInput extends CarInput {
  constructor(parent: HTMLElement, submitTextContent: string) {
    super(parent, submitTextContent)
    this.submitButton.element.addEventListener('click', () => this.submitHandler())
  }

  private submitHandler(): void {
    const carData = {
      name: this.nameInput.inputValue || 'default name',
      color: this.colorInput.inputValue,
    }

    createCar(carData).then(() => {
      emitter.emit('render cars')
    })
  }
}

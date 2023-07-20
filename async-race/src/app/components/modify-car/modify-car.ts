import { CarInput } from '../car-input/car-input'

export class ModifyCar extends CarInput {
  constructor(parent: HTMLElement, textContent: string) {
    super(parent, textContent)
    this.submitButton.element.addEventListener('click', () => this.modifyCar())
  }

  private modifyCar(): void {
    console.log('moding car')
  }
}

import { gameState } from 'src/app/utils/game-state'
import { httpFetcher } from 'src/app/utils/http-fetcher'
import { emitter } from 'src/app/utils/event-emitter'
import { CarInput } from '../car-input/car-input'

export class ModifyCar extends CarInput {
  constructor(parent: HTMLElement, textContent: string) {
    super(parent, textContent)
    this.submitButton.element.addEventListener('click', () => this.modifyCar())
  }

  private modifyCar(): void {
    if (!gameState.modifyingCarId) {
      return
    }

    if (!gameState.carCells) {
      return
    }

    const modifyingTarget = gameState.carCells.find((carCell) => carCell.carData?.id === gameState.modifyingCarId)

    if (modifyingTarget) {
      httpFetcher
        .modifyCar(modifyingTarget.carData.id, {
          name: this.nameInput.inputValue ?? 'default name',
          color: this.colorInput.inputValue ?? '#000000',
        })
        .then(() => emitter.emit('render cars'))
    }
  }
}

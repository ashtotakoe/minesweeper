import { gameState } from 'src/app/utils/game-state'
import { httpFetcher } from 'src/app/utils/http-fetcher'
import { emitter } from 'src/app/utils/event-emitter'
import { CarInput } from '../../../shared/components/car-input/car-input'

export class ModifyCarInput extends CarInput {
  constructor(parent: HTMLElement, textContent: string) {
    super(parent, textContent)
    this.submitButton.element.addEventListener('click', () => this.modifyCar())
  }

  private async modifyCar(): Promise<void> {
    if (!gameState.modifyingCarId) {
      return
    }

    if (!gameState.carCells) {
      return
    }

    const modifyingTarget = gameState.carCells.find((carCell) => carCell.carData?.id === gameState.modifyingCarId)

    if (modifyingTarget) {
      const oldName = modifyingTarget.carData.name

      await httpFetcher.modifyCar(modifyingTarget.carData.id, {
        name: this.nameInput.inputValue || oldName,
        color: this.colorInput.inputValue ?? '#000000',
      })
      emitter.emit('render cars')
      emitter.emit('render winners')
    }
  }
}

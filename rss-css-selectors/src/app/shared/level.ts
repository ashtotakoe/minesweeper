import { LevelElem, LevelConstructor } from '../core/types/interfaces'

export class Level {
  public serialNumber: number
  public structure: LevelElem
  public answer: string[]
  public task: string

  constructor({ serialNumber, structure, task = 'sorry, no task yet!', answer = [] }: LevelConstructor) {
    this.serialNumber = serialNumber
    this.structure = structure
    this.answer = answer
    this.task = task
  }
}

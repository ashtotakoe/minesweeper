import { LevelElem } from '../core/types/interfaces'

export class Level {
  public serialNumber: number
  public structure: LevelElem

  constructor(serialNumber: number, structure: LevelElem) {
    this.serialNumber = serialNumber
    this.structure = structure
  }
}

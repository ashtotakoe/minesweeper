import { LevelElem, LevelConstructor } from '../models/interfaces'

export class Level {
  public serialNumber: number
  public structure: LevelElem
  public answer: string[]
  public task: string
  public targetsCount: number

  constructor({
    serialNumber,
    structure,
    targetsCount = 1,
    task = 'sorry, no task yet!',
    answer = ['selector'],
  }: LevelConstructor) {
    this.serialNumber = serialNumber
    this.structure = structure
    this.answer = answer
    this.task = `Your task: ${task}`
    this.targetsCount = targetsCount
  }
}

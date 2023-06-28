import { changeLevel } from './change-level'
import { emitter } from './event-emitter'

export const displayVictory = (levelIndex: number): void => {
  emitter.emit('display victory')
  changeLevel(levelIndex)
}

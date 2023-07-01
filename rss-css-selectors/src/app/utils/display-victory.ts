import { levels } from '../constants/levels'
import { changeLevel } from './change-level'
import { emitter } from './event-emitter'

export const displayVictory = (levelIndex: number): void => {
  emitter.emit('display victory')
  levels[levelIndex - 1].isDone = 'done'
  emitter.emit('rewrite statuses')
  changeLevel(levelIndex)
}

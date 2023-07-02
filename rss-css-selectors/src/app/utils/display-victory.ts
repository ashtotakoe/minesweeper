import { levels } from '../constants/levels'
import { changeLevel } from './change-level'
import { emitter } from './event-emitter'

export const displayVictory = (levelIndex: number): void => {
  const currentStatus = levels[levelIndex - 1].isDone
  emitter.emit('display victory')
  levels[levelIndex - 1].isDone = currentStatus === 'with hint' ? 'with hint' : 'done'
  emitter.emit('rewrite statuses')
  changeLevel(levelIndex)
}

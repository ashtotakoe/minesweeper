import { gameState } from '../constants/game-state'
import { emitter } from './event-emitter'

export const changeLevel = (levelIndex: number): void => {
  gameState.currentLevelIndex = levelIndex
  emitter.emit('change level', gameState.currentLevel.structure)
  emitter.emit('set input text default')
  emitter.emit('set task', gameState.currentLevel)
}

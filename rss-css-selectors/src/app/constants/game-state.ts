import { Level } from '../utils/level'
import { levels } from './levels'

class GameState {
  private _currentLevelIndex: number
  public isInputFitstTimeClicked: boolean = true

  constructor({ currentLevel }: GameStateConstructor) {
    this._currentLevelIndex = currentLevel
  }

  public get currentLevel(): Level {
    return levels[this._currentLevelIndex]
  }

  public set currentLevelIndex(level: number) {
    this.isInputFitstTimeClicked = true
    this._currentLevelIndex = level
  }
}

interface GameStateConstructor {
  currentLevel: number
}

export const gameState = new GameState({ currentLevel: 0 })

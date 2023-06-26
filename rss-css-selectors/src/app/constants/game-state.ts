class GameState {
  private _currentLevel: number
  public isInputFitstTimeClicked: boolean = true
  constructor({ currentLevel }: GameStateConstructor) {
    this._currentLevel = currentLevel
  }

  public get currentLevel(): number {
    return this._currentLevel
  }

  public set currentLevel(level: number) {
    this.isInputFitstTimeClicked = true
    this._currentLevel = level
  }
}

interface GameStateConstructor {
  currentLevel: number
}

export const gameState = new GameState({ currentLevel: 0 })

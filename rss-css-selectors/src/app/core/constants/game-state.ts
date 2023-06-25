class GameState {
  public currentLevel: number
  constructor({ currentLevel }: GameStateConstructor) {
    this.currentLevel = currentLevel
  }
}

interface GameStateConstructor {
  currentLevel: number
}

export const gameState = new GameState({ currentLevel: 0 })

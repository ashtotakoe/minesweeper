import { CarCell } from '../components/car-cell/car-cell'

class GameState {
  public modifyingCarId: number | null = null
  public currentGaragePage: number = 1
  public carCells: CarCell[] | null = null
}

export const gameState = new GameState()

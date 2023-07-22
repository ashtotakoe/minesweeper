import { CarCell } from '../components/car-cell/car-cell'
import { Car } from '../components/car/car'

class GameState {
  public modifyingCarId: number | null = null
  public currentGaragePage: number = 1
  public carCells: CarCell[] | null = null
  public isRaceGoing = false
  public finishers: Car[] = []
}

export const gameState = new GameState()

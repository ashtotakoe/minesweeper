import { CarCell } from '../components/car-cell/car-cell'
import { Car } from '../components/car/car'

class GameState {
  public modifyingCarId: number | null = null
  public currentGaragePage = 1
  public carCells: CarCell[] | null = null
  public isRaceGoing = false
  public raceWinner: Car | null = null
  public currentWinnersPage = 1
}

export const gameState = new GameState()

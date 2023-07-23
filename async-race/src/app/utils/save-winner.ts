import { RequestStatuses } from '../enum/request-statuses'
import { gameState } from './game-state'
import { httpFetcher } from './http-fetcher'

export const saveWinner = async (): Promise<void> => {
  console.log(gameState.raceWinnerTime)

  const winnerId = gameState.raceWinner?.carData.id

  if (!winnerId) {
    return
  }

  const response = await httpFetcher.getWinner(winnerId)
  if (response.status === RequestStatuses.NotFound) {
    const newRes = await httpFetcher.setNewWinner(winnerId, gameState.raceWinnerTime)
    console.log(newRes)
    return
  }
  console.log(response)
  console.log('same winner')
}

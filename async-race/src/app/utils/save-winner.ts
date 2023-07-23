import { RequestStatuses } from '../enum/request-statuses'
import { gameState } from './game-state'
import { httpFetcher } from './http-fetcher'

export const saveWinner = async (): Promise<void> => {
  console.log(gameState.raceWinnerTime)

  const winnerId = gameState.raceWinner?.carData.id

  if (!winnerId) {
    return
  }

  const getWinnerResponse = await httpFetcher.getWinner(winnerId)

  if (getWinnerResponse.status === RequestStatuses.NotFound) {
    const setWinnerResponse = await httpFetcher.setNewWinner(winnerId, gameState.raceWinnerTime)
    console.log(setWinnerResponse)
    return
  }
  console.log(getWinnerResponse)
  console.log('same winner')

  const updateWinnerResponse = await httpFetcher.updateWinnerData(winnerId, gameState.raceWinnerTime)
  console.log(updateWinnerResponse)
}

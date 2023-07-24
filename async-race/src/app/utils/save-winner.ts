import { RequestStatuses } from '../enum/request-statuses'
import { emitter } from './event-emitter'
import { gameState } from './game-state'
import { httpFetcherWinners } from './http-fetcher-winners'

export const saveWinner = async (): Promise<void> => {
  console.log(gameState.raceWinnerTime)

  const winnerId = gameState.raceWinner?.carData.id

  if (!winnerId) {
    return
  }
  const timeInSeconds = Number((gameState.raceWinnerTime / 1000).toFixed(2))

  const getWinnerResponse = await httpFetcherWinners.getWinner(winnerId)

  if (getWinnerResponse.status === RequestStatuses.NotFound) {
    const setWinnerResponse = await httpFetcherWinners.setNewWinner(winnerId, timeInSeconds)
    console.log(setWinnerResponse)
    emitter.emit('render winners')
    return
  }
  console.log(getWinnerResponse)
  console.log('same winner')

  const updateWinnerResponse = await httpFetcherWinners.updateWinnerData(winnerId, timeInSeconds)
  console.log(updateWinnerResponse)

  emitter.emit('render winners')
}

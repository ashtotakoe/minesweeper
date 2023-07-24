import { RequestStatuses } from '../enums/request-statuses'
import { emitter } from './event-emitter'
import { gameState } from './game-state'
import { httpFetcherWinners } from '../winners/services/http-fetcher-winners'

export const saveWinner = async (): Promise<void> => {
  const winnerId = gameState.raceWinner?.carData.id

  if (!winnerId) {
    return
  }
  const timeInSeconds = Number((gameState.raceWinnerTime / 1000).toFixed(2))

  const getWinnerResponse = await httpFetcherWinners.getWinner(winnerId)

  if (getWinnerResponse.status === RequestStatuses.NotFound) {
    await httpFetcherWinners.setNewWinner(winnerId, timeInSeconds)
    emitter.emit('render winners')
    return
  }

  await httpFetcherWinners.updateWinnerData(winnerId, timeInSeconds)

  emitter.emit('render winners')
}

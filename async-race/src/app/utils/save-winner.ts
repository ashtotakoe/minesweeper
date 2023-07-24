import { RequestStatuses } from '../enum/request-statuses'
import { emitter } from './event-emitter'
import { gameState } from './game-state'
import { httpFetcherEngine } from './http-fetcher-engine'

export const saveWinner = async (): Promise<void> => {
  console.log(gameState.raceWinnerTime)

  const winnerId = gameState.raceWinner?.carData.id

  if (!winnerId) {
    return
  }

  const getWinnerResponse = await httpFetcherEngine.getWinner(winnerId)

  if (getWinnerResponse.status === RequestStatuses.NotFound) {
    const setWinnerResponse = await httpFetcherEngine.setNewWinner(winnerId, gameState.raceWinnerTime)
    console.log(setWinnerResponse)
    emitter.emit('render winners')
    return
  }
  console.log(getWinnerResponse)
  console.log('same winner')

  const updateWinnerResponse = await httpFetcherEngine.updateWinnerData(winnerId, gameState.raceWinnerTime)
  console.log(updateWinnerResponse)

  emitter.emit('render winners')
}

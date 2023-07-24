import { API } from 'src/app/enums/api'
import { HTTPMethods } from 'src/app/enums/http-methods'
import { headersForPostMethod } from 'src/app/consts/headers-for-post-method'
import { PageLimits } from 'src/app/enums/page-limits'
import { gameState } from 'src/app/utils/game-state'
import { WinnerData } from '../models/winner-data'
import { WinnerQueryParams } from '../models/winner-query-params'

class HTTPFetcherWinners {
  public async getWinner(id: number): Promise<Response> {
    const response = await fetch(`${API.Path}/winners/${id}`)
    return response
  }

  public async getWinners(isPaginationRequiered = false, queryParams?: WinnerQueryParams): Promise<WinnerData[]> {
    let query = ''
    if (isPaginationRequiered) {
      query = `?_page=${gameState.currentWinnersPage}&_limit=${PageLimits.WinnersLimit}`
    }

    if (queryParams) {
      query += `&_sort=${queryParams.sort}&_order=${queryParams.order}`
    }

    const respone = await fetch(`${API.Path}/winners${query}`)
    const winnersData = respone.json()
    return winnersData
  }

  public async deleteWinner(id: number): Promise<void> {
    await fetch(`${API.Path}/winners/${id}`, {
      method: HTTPMethods.DELETE,
    })
  }

  public async updateWinnerData(id: number, rideTime: number): Promise<Response> {
    const initialDataRewspose = await fetch(`${API.Path}/winners/${id}`)
    const initialData: WinnerData = await initialDataRewspose.json()
    let { wins, time } = initialData
    wins += 1
    time = time > rideTime ? rideTime : time

    const response = await fetch(`${API.Path}/winners/${id}`, {
      method: HTTPMethods.PUT,
      headers: headersForPostMethod,
      body: JSON.stringify({
        wins,
        time,
      }),
    })

    return response
  }

  public async setNewWinner(id: number, rideTime: number): Promise<Response> {
    console.log('server time', rideTime)
    const response = await fetch(`${API.Path}/winners`, {
      method: HTTPMethods.POST,
      headers: headersForPostMethod,
      body: JSON.stringify({
        id,
        wins: 1,
        time: rideTime,
      }),
    })

    return response
  }
}

export const httpFetcherWinners = new HTTPFetcherWinners()

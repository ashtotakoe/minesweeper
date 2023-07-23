import { headersForPostMethod } from '../consts/headers-for-post-method'
import { API } from '../enum/api'
import { HTTPMethods } from '../enum/http-methods'
import { CarData } from '../models/car-data'
import { CreateCarData } from '../models/create-car-data'
import { EngineStartedData } from '../models/engine-started-response'
import { StartEngineReturnProps } from '../models/start-engine-return-props'
import { WinnerData } from '../models/winner-data'
import { gameState } from './game-state'

class HTTPFetcher {
  public async getCars({ isPaginationRequiered = true }): Promise<CarData[]> {
    const query = `?_page=${gameState.currentGaragePage}&_limit=${API.CarLimit}`
    const response = await fetch(`${API.Path}/garage${isPaginationRequiered ? query : ''}`)
    const cars = await response.json()
    return cars
  }

  public async getCar(id: number): Promise<CarData> {
    const response = await fetch(`${API.Path}/garage/${id}`)
    const car = await response.json()
    return car
  }

  public async startEngine(id: number): Promise<StartEngineReturnProps> {
    const response = await fetch(`${API.Path}/engine?id=${id}&status=started`, {
      method: HTTPMethods.PATCH,
    })

    const engineStartedData: EngineStartedData = await response.json()
    const driveModeResponse = this.startDriveMode(id)
    return { engineStartedData, driveModeResponse }
  }

  public async startDriveMode(id: number): Promise<Response> {
    const response = await fetch(`${API.Path}/engine?id=${id}&status=drive`, {
      method: HTTPMethods.PATCH,
    })
    return response
  }

  public async stopEngine(id: number): Promise<Response> {
    const response = await fetch(`${API.Path}/engine?id=${id}&status=stopped`, {
      method: HTTPMethods.PATCH,
    })

    return response
  }

  public async createCar(carData: CreateCarData): Promise<Response> {
    const requestBody = JSON.stringify(carData)
    const response = await fetch(`${API.Path}/garage`, {
      method: HTTPMethods.POST,
      body: requestBody,
      headers: headersForPostMethod,
    })

    return response
  }

  public async deleteCar(id: number): Promise<void> {
    await fetch(`${API.Path}/garage/${id}`, {
      method: HTTPMethods.DELETE,
    })
  }

  public async modifyCar(id: number, carData: CreateCarData): Promise<void> {
    const requestBody = JSON.stringify(carData)
    await fetch(`${API.Path}/garage/${id}`, {
      method: HTTPMethods.PUT,
      headers: headersForPostMethod,
      body: requestBody,
    })
  }

  public async getWinner(id: number): Promise<Response> {
    const response = await fetch(`${API.Path}/winners/${id}`)
    return response
  }

  public async getWinners(): Promise<WinnerData[]> {
    const respone = await fetch(`${API.Path}/winners`)
    const winnersData = respone.json()
    return winnersData
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
}

export const httpFetcher = new HTTPFetcher()

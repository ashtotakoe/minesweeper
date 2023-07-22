import { API } from '../enum/api'
import { HTTPMethods } from '../enum/http-methods'
import { CarData } from '../models/car-data'
import { CreateCarData } from '../models/create-car-data'
import { EngineStartedData } from '../models/engine-started-response'
import { StartEngineReturnProps } from '../models/start-engine-return-props'
import { gameState } from './game-state'

class HTTPFetcher {
  public async getCars({ isPaginationRequiered = true }): Promise<CarData[]> {
    const query = `?_page=${gameState.currentGaragePage}&_limit=${API.CarLimit}`
    const response = await fetch(`${API.Path}/garage${isPaginationRequiered ? query : ''}`)
    const cars = await response.json()
    return cars
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
      headers: {
        'Content-Type': 'application/json',
      },
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
  }

  public async getWinner(id: number): Promise<Response> {
    const response = await fetch(`${API.Path}/winners/${id}`)
    return response
  }
}

export const httpFetcher = new HTTPFetcher()

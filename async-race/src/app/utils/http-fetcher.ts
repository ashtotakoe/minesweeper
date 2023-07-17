import { API } from '../enum/api'
import { HTTPMethods } from '../enum/http-methods'
import { CarData } from '../models/car-data'
import { EngineStartedResponse } from '../models/engine-started-response'

class HTTPFetcher {
  public async getCars(): Promise<CarData[]> {
    const response = await fetch(`${API.path}/garage`)
    const cars = await response.json()
    return cars
  }

  public async startEngine(id: number): Promise<EngineStartedResponse> {
    const response = await fetch(`${API.path}/engine?id=${id}&status=started`, {
      method: HTTPMethods.PATCH,
    })

    const data = await response.json()
    this.startDriveMod(id)
    return data
  }

  public async startDriveMod(id: number): Promise<void> {
    const response = await fetch(`${API.path}/engine?id=${id}&status=drive`, {
      method: HTTPMethods.PATCH,
    })
    const data = await response.json()
    console.log(data)
  }

  public async stopEngine(id: number): Promise<Response> {
    const response = await fetch(`${API.path}/engine?id=${id}&status=stopped`, {
      method: HTTPMethods.PATCH,
    })

    return response
  }
}

export const httpFetcher = new HTTPFetcher()

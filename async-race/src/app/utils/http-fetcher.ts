import { API } from '../enum/api'
import { HTTPMethods } from '../enum/http-methods'
import { CarData } from '../models/car-data'
import { CreateCarData } from '../models/create-car-data'
import { EngineStartedData } from '../models/engine-started-response'
import { StartEngineReturnProps } from '../models/start-engine-return-props'

class HTTPFetcher {
  public async getCars(): Promise<CarData[]> {
    const response = await fetch(`${API.path}/garage`)
    const cars = await response.json()
    return cars
  }

  public async startEngine(id: number): Promise<StartEngineReturnProps> {
    const response = await fetch(`${API.path}/engine?id=${id}&status=started`, {
      method: HTTPMethods.PATCH,
    })

    const engineStartedData: EngineStartedData = await response.json()
    const driveModeResponse = this.startDriveMode(id)
    return { engineStartedData, driveModeResponse }
  }

  public async startDriveMode(id: number): Promise<Response> {
    const response = await fetch(`${API.path}/engine?id=${id}&status=drive`, {
      method: HTTPMethods.PATCH,
    })
    return response
  }

  public async stopEngine(id: number): Promise<Response> {
    const response = await fetch(`${API.path}/engine?id=${id}&status=stopped`, {
      method: HTTPMethods.PATCH,
    })

    return response
  }

  public async createCar(carData: CreateCarData): Promise<Response> {
    const requestBody = JSON.stringify(carData)
    const response = await fetch(`${API.path}/garage`, {
      method: HTTPMethods.POST,
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response)

    return response
  }
}

export const httpFetcher = new HTTPFetcher()

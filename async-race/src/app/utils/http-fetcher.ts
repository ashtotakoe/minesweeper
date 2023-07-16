import { API } from '../enum/api'
import { CarData } from '../models/car-data'

class HTTPFetcher {
  public async getCars(): Promise<CarData[]> {
    const response = await fetch(`${API.path}/garage`)
    const cars = await response.json()
    return cars
  }
}

export const httpFetcher = new HTTPFetcher()

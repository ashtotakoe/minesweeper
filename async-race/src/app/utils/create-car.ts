import { CreateCarData } from '../models/create-car-data'
import { httpFetcherEngine } from './http-fetcher-engine'

export const createCar = async (carData: CreateCarData): Promise<Response> => {
  const response = await httpFetcherEngine.createCar(carData)
  return response
}

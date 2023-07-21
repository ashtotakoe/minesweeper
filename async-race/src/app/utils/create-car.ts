import { CreateCarData } from '../models/create-car-data'
import { httpFetcher } from './http-fetcher'

export const createCar = async (carData: CreateCarData): Promise<Response> => {
  const response = await httpFetcher.createCar(carData)
  return response
}

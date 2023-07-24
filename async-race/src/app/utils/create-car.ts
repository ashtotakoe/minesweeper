import { CreateCarData } from '../garage/models/create-car-data'
import { httpFetcherGarage } from '../garage/services/http-fetcher-garage'

export const createCar = async (carData: CreateCarData): Promise<Response> => {
  const response = await httpFetcherGarage.createCar(carData)
  return response
}

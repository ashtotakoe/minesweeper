import { GetRespOptions, GetRespParam, LoaderOptions } from '../../interfaces/interfaces'
import { Response } from '../../types/types'

class Loader {
  public baseLink: string
  public options: LoaderOptions

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink
    this.options = options
  }

  public getResp({ endpoint, options = {} }: GetRespParam, callback: (data: Response) => void): void {
    this.load('GET', endpoint, callback, options)
  }

  private makeUrl(options: GetRespOptions, endpoint: string): string {
    const urlOptions = { ...this.options, ...options }

    let url = `${this.baseLink}${endpoint}?`

    Object.entries(urlOptions).forEach((entrie) => {
      url += `${entrie[0]}=${entrie[1]}&`
    })

    return url.slice(0, -1)
  }

  protected load(method: string, endpoint: string, callback: (data: Response) => void, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then((data) => callback(data))
      .catch((err) => console.error('aboba', err))
  }
}

export default Loader

import AppLoader from './appLoader'
import { ResponseNews, ResponseSource } from '../../types'

class AppController extends AppLoader {
  public getSources(callback: (data: ResponseSource) => void): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    )
  }

  public getNews(e: Event, callback: (data: ResponseNews) => void): void {
    let { target } = e
    const newsContainer = e.currentTarget

    while (
      target !== newsContainer &&
      target !== null &&
      target instanceof HTMLElement &&
      newsContainer !== null &&
      newsContainer instanceof HTMLElement
    ) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id')
        if (sourceId !== null) {
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId)
            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback,
            )
          }
          return
        }
      }
      target = target.parentNode
    }
  }
}

export default AppController

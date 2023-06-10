import News from './news/news'
import Sources from './sources/sources'
import { Response } from '../../types/types'

export class AppView {
  private news = new News()
  private sources = new Sources()

  // TODO вынести повторяющийся код в утилитарку

  public drawNews(data: Response): void {
    const values = 'articles' in data ? data.articles : []
    this.news.draw(values)
  }

  public drawSources(data: Response): void {
    const values = 'sources' in data ? data.sources : []
    this.sources.draw(values)
  }
}

export default AppView

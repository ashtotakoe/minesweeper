import AppController from '../controller/controller'
import { AppView } from '../view/appView'
import { Response } from '../../types/types'

class App {
  private controller = new AppController()
  private view = new AppView()

  public start(): void {
    document
      .querySelector('.sources')
      ?.addEventListener('click', (e) => this.controller.getNews(e, (data: Response) => this.view.drawNews(data)))
    this.controller.getSources((data: Response) => this.view.drawSources(data))
  }
}

export default App

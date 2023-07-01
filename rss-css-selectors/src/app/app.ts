import { Layout } from './components/layout/layout'
import { manageLocalStroage } from './utils/manageLocalStrorage'

class App {
  public init(): void {
    manageLocalStroage.setLevelsStatus()
    const layout = new Layout()
    layout.init(document.body)
  }
}
const app = new App()
app.init()

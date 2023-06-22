import { Layout } from './components/layout/layout'

class App {
  public init(): void {
    const layout = new Layout()
    layout.init(document.body)
  }
}
const app = new App()
app.init()

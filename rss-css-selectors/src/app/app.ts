import { Layout } from './features/layout/layout'

class App {
  public init(): void {
    const layout = new Layout()
    layout.init(document.body)
  }
}
const app = new App()
app.init()

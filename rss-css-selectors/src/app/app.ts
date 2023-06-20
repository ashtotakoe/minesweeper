import { Layout } from './components/layouts/layout'

class App {
  public init(): void {
    const layout = new Layout()
    console.log(layout.init(document.body))
  }
}
const app = new App()
app.init()

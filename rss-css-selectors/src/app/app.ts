import { Layout } from './components/layout/layout'
import { gameState } from './constants/game-state'
import { manageLocalStroage } from './utils/manageLocalStrorage'

class App {
  public init(): void {
    manageLocalStroage.setLevelsStatus()
    gameState.currentLevelIndex = manageLocalStroage.currentlyOpenedLevel
    window.addEventListener('beforeunload', () => manageLocalStroage.setLocalStorage())
    const layout = new Layout()
    layout.init(document.body)
  }
}
const app = new App()
app.init()

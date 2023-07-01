import { defaultLevelsStatus } from '../constants/default-levels-status'
import { levels } from '../constants/levels'

export class ManageLocalStorage {
  public setLevelsStatus(): boolean {
    const localStorageTarget = localStorage.getItem('passed levels')
    if (localStorageTarget === null) {
      localStorage.setItem('passed levels', JSON.stringify(defaultLevelsStatus))
      return true
    }

    JSON.parse(localStorageTarget).forEach((levelStatus: string, index: number) => {
      levels[index].isDone = levelStatus
    })

    return true
  }
}

export const manageLocalStroage = new ManageLocalStorage()

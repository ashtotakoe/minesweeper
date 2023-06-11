import './sources.css'
import { Source, Article } from '../../../interfaces/interfaces'

class Sources {
  public draw<T extends Source[] | Article[]>(data: T): void {
    const fragment = document.createDocumentFragment()
    const sourceItemTemp = document.querySelector('#sourceItemTemp')

    if (sourceItemTemp instanceof HTMLTemplateElement) {
      data.forEach((item) => {
        const sourceClone = sourceItemTemp?.content.cloneNode(true)
        if (!sourceClone || !(sourceClone instanceof DocumentFragment)) {
          return
        }
        const sourceItemName = sourceClone.querySelector('.source__item-name')
        const sourceItem = sourceClone.querySelector('.source__item')

        if (sourceItemName instanceof HTMLSpanElement && sourceItem instanceof HTMLDivElement && 'name' in item) {
          sourceItemName.textContent = item.name
          sourceItem.setAttribute('data-source-id', item.id)
        }

        fragment.append(sourceClone)
      })
      document.querySelector('.sources')?.append(fragment)
    }
  }
}

export default Sources

import { levels } from '../../../data/levels'
import { CreateElementTupleParam, GameElementsConstructor, LevelElem } from '../../../types/interfaces'
import { GameElement } from '../../../utils/game-element'
import { gameElementClasses } from '../../../data/game-element-classes'

export class GameElements {
  private playground: HTMLElement
  private editor: HTMLElement
  private id = 0

  public elements: GameElement[][]

  constructor({ playground, editor }: GameElementsConstructor) {
    this.playground = playground
    this.editor = editor

    this.elements = this.createElements(levels.level1)
  }

  private createElements(level: LevelElem): GameElement[][] {
    const baseElements = this.createElementTuple({
      elem: level,
      parentPlayground: this.playground,
      parentEditor: this.editor,
      id: this.id++,
    })

    const playgroundElems: GameElement[] = [baseElements[0]]
    const editorElems: GameElement[] = [baseElements[1]]

    level.children.forEach((elem) => {
      const [playgroundElem, editorElem] = this.createElementTuple({
        elem,
        id: this.id++,
        parentPlayground: baseElements[0].element,
        parentEditor: baseElements[1].element,
      })

      playgroundElems.push(playgroundElem)
      editorElems.push(editorElem)

      if (elem.children.length !== 0) {
        elem.children.forEach((child) => {
          const [playgroundChild, editorChild] = this.createElementTuple({
            elem: child,
            parentPlayground: playgroundElem.element,
            parentEditor: editorElem.element,
            id: this.id++,
          })
          playgroundElems.push(playgroundChild)
          editorElems.push(editorChild)
        })
      }
    })

    return [playgroundElems, editorElems]
  }
  private createElementTuple({ elem, parentPlayground, parentEditor, id }: CreateElementTupleParam): GameElement[] {
    return [
      new GameElement(parentPlayground, id, {
        className: gameElementClasses[elem.name].playground,
      }),
      new GameElement(parentEditor, id, {
        className: gameElementClasses[elem.name].editor,
      }),
    ]
  }
}

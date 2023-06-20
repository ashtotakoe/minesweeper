import { levels } from '../../../data/levels'
import { CreateElementTupleParam, GameElementsConstructor, LevelElem } from '../../../types/interfaces'
import { GameElement } from '../../../utils/game-element'
import { gameElementClasses } from '../../../data/game-element-classes'
import { gameELementTextContent } from '../../../data/game-element-inner-text'

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
    const [baseElemBeforeText, baseElemAfterText] = gameELementTextContent[level.name]
    const baseElements = this.createElementTuple({
      elem: level,
      parentPlayground: this.playground,
      parentEditor: this.editor,
      id: this.id++,
    })

    const playgroundElems: GameElement[] = [baseElements[0]]
    const editorElems: GameElement[] = [baseElements[1]]

    baseElements[1].element.textContent = baseElemBeforeText

    this.childrenIteration(level, baseElements, playgroundElems, editorElems)

    baseElements[1].element.textContent += `\n${baseElemAfterText}`

    return [playgroundElems, editorElems]
  }

  private childrenIteration(
    level: LevelElem,
    baseElements: GameElement[],
    playgroundElems: GameElement[],
    editorElems: GameElement[],
  ): void {
    level.children.forEach((elem) => {
      const [playgroundElem, editorElem] = this.createElementTuple({
        elem,
        id: this.id++,
        parentPlayground: baseElements[0].element,
        parentEditor: baseElements[1].element,
      })
      const [editorElemBeforeText, editorElemAfterText] = gameELementTextContent[elem.name]

      playgroundElems.push(playgroundElem)
      editorElems.push(editorElem)
      editorElem.element.textContent = editorElemBeforeText

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

      editorElem.element.textContent += editorElemAfterText
    })
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

import { levels } from '../../../data/levels'
import { CreateElementTupleParam, GameElementsConstructor, LevelElem } from '../../../types/interfaces'
import { GameElement } from '../../../utils/game-element'
import { gameElementClasses } from '../../../data/game-element-classes'
import { gameELementTextNodes } from '../../../data/game-element-text-nodes'

export class GameElements {
  private playground: HTMLElement
  private editor: HTMLElement
  private id = 0

  private playgroundElems: GameElement[] = []
  private editorElems: GameElement[] = []

  public elements: GameElement[][]

  constructor({ playground, editor }: GameElementsConstructor) {
    this.playground = playground
    this.editor = editor

    this.elements = this.createElements(levels.level1)
  }

  private createElements(level: LevelElem): GameElement[][] {
    const [baseElemBeforeText, baseElemAfterText] = gameELementTextNodes[level.name]
    const baseElements = this.createElementTuple({
      elem: level,
      parentPlayground: this.playground,
      parentEditor: this.editor,
      id: this.id++,
    })

    this.playgroundElems.push(baseElements[0])
    this.editorElems.push(baseElements[1])

    baseElements[1].element.append(baseElemBeforeText)

    this.childrenIteration(level, baseElements)

    baseElements[1].element.append(baseElemAfterText)

    return [this.playgroundElems, this.editorElems]
  }

  private childrenIteration(level: LevelElem, baseElements: GameElement[]): void {
    level.children.forEach((elem) => {
      const [playgroundElem, editorElem] = this.createElementTuple({
        elem,
        id: this.id++,
        parentPlayground: baseElements[0].element,
        parentEditor: baseElements[1].element,
      })
      const [editorElemBeforeText, editorElemAfterText] = gameELementTextNodes[elem.name]

      this.playgroundElems.push(playgroundElem)
      this.editorElems.push(editorElem)

      editorElem.element.append(editorElemBeforeText)

      if (elem.children.length !== 0) {
        elem.children.forEach((child) => {
          const [playgroundChild, editorChild] = this.createElementTuple({
            elem: child,
            parentPlayground: playgroundElem.element,
            parentEditor: editorElem.element,
            id: this.id++,
          })

          const [editorChildTextContent] = gameELementTextNodes[child.name]
          editorChild.element.textContent = editorChildTextContent

          this.playgroundElems.push(playgroundChild)
          this.editorElems.push(editorChild)
        })
      }

      editorElem.element.append(editorElemAfterText)
    })
  }

  private createElementTuple({ elem, parentPlayground, parentEditor, id }: CreateElementTupleParam): GameElement[] {
    const playgroundElem = new GameElement(parentPlayground, id, {
      className: gameElementClasses[elem.name].playground,
    })
    const editorElem = new GameElement(parentEditor, id, {
      className: gameElementClasses[elem.name].editor,
    })

    playgroundElem.element.addEventListener('mouseover', (e) => this.mouseEventHandler(e))
    playgroundElem.element.addEventListener('mouseout', (e) => this.mouseEventHandler(e))

    editorElem.element.addEventListener('mouseover', (e) => this.mouseEventHandler(e))
    editorElem.element.addEventListener('mouseout', (e) => this.mouseEventHandler(e))

    return [playgroundElem, editorElem]
  }

  private mouseEventHandler(e: Event): boolean {
    this.playgroundElems.forEach((editorElem) => editorElem.element.classList.remove('linted'))
    this.editorElems.forEach((editorElem) => editorElem.element.classList.remove('linted'))

    const playgroundTarget = this.playgroundElems.find((gameElem) => gameElem.element === e.target)
    const editorTarget = this.editorElems.find((gameElem) => gameElem.element === e.target)

    if (playgroundTarget !== undefined) {
      playgroundTarget.element.classList.add('linted')

      const lintingTarget = this.editorElems.find((editorElem) => editorElem.id === playgroundTarget.id)
      if (e.type === 'mouseover') {
        lintingTarget?.element.classList.add('linted')
        return true
      }
      lintingTarget?.element.classList.remove('linted')
      return true
    }

    if (editorTarget !== undefined) {
      editorTarget.element.classList.add('linted')

      const lintingTarget = this.playgroundElems.find((playgroundElem) => playgroundElem.id === editorTarget.id)
      if (e.type === 'mouseover') {
        lintingTarget?.element.classList.add('linted')
        return true
      }
      lintingTarget?.element.classList.remove('linted')
      return true
    }

    return false
  }
}

import { CreateElementTupleParam, GameElementsConstructor, LevelElem } from '../../core/types/interfaces'
import { GameElement } from '../../shared/game-element'
import { gameElementClasses } from '../../core/constants/game-element-classes'
import { gameELementTextNodes } from '../../core/constants/game-element-text-nodes'
import { emitter } from '../../shared/event-emitter'

export class GameElements {
  private playground: HTMLElement
  private editor: HTMLElement
  private id = 0

  private playgroundElems: GameElement[] = []
  private editorElems: GameElement[] = []

  constructor({ playground, editor }: GameElementsConstructor) {
    this.playground = playground
    this.editor = editor
    emitter.subscribe('change level', (args: LevelElem) => this.createElements(args))
  }

  public createElements(level: LevelElem): void {
    this.playgroundElems = []
    this.editorElems = []
    this.id = 0
    this.playground.replaceChildren()
    this.editor.replaceChildren()

    const [textBeforeBaseElem, textAfterBaseElem] = gameELementTextNodes[level.name]
    const baseElements = this.createElementTuple({
      elem: level,
      parentPlayground: this.playground,
      parentEditor: this.editor,
      id: this.id++,
    })

    this.playgroundElems.push(baseElements[0])
    this.editorElems.push(baseElements[1])

    baseElements[1].element.append(textBeforeBaseElem)

    this.childrenIteration(level, baseElements)

    baseElements[1].element.append(textAfterBaseElem)
  }

  private childrenIteration(level: LevelElem, baseElements: GameElement[]): void {
    level.children.forEach((elem) => {
      const [playgroundElem, editorElem] = this.createElementTuple({
        elem,
        id: this.id++,
        parentPlayground: baseElements[0].element,
        parentEditor: baseElements[1].element,
      })
      const [textBeforeEditorElem, textAfterEditorElem] = gameELementTextNodes[elem.name]

      this.playgroundElems.push(playgroundElem)
      this.editorElems.push(editorElem)

      editorElem.element.append(textBeforeEditorElem)

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

      editorElem.element.append(textAfterEditorElem)
    })
  }

  private createElementTuple({ elem, parentPlayground, parentEditor, id }: CreateElementTupleParam): GameElement[] {
    const playgroundElem = new GameElement({
      parent: parentPlayground,
      id,
      attribute: {
        className: gameElementClasses[elem.name].playground,
      },
    })
    const editorElem = new GameElement({
      parent: parentEditor,
      id,
      attribute: {
        className: gameElementClasses[elem.name].editor,
      },
    })
    const gameElementTuple = [playgroundElem, editorElem]

    gameElementTuple.forEach((gameElement) => {
      gameElement.element.addEventListener('mouseover', (e) => this.mouseEventHandler(e))
      gameElement.element.addEventListener('mouseout', (e) => this.mouseEventHandler(e))
    })

    return gameElementTuple
  }

  private mouseEventHandler(e: Event): boolean {
    this.playgroundElems.forEach((editorElem) => editorElem.element.classList.remove('linted'))
    this.editorElems.forEach((editorElem) => editorElem.element.classList.remove('linted'))

    const playgroundTarget = this.playgroundElems.find((gameElem) => gameElem.element === e.target)
    const editorTarget = this.editorElems.find((gameElem) => gameElem.element === e.target)

    if (editorTarget?.id === 0 || playgroundTarget?.id === 0) {
      return false
    }

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

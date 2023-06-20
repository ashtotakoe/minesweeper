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

    this.elements = this.recursiveCreateElements(levels.level1, this.playground, this.editor)
  }

  private recursiveCreateElements(
    levelElems: LevelElem[],
    playground: HTMLElement,
    editor: HTMLElement,
  ): GameElement[][] {
    const playgroundElems: GameElement[] = []
    const editorElems: GameElement[] = []

    levelElems.forEach((elem) => {
      const [playgroundElem, editorElem] = this.createElementTuple({
        elem,
        id: this.id++,
        parentPlayground: playground,
        parentEditor: editor,
      })

      playgroundElems.push(playgroundElem)
      editorElems.push(editorElem)

      if (elem.children[0]) {
        const [tempPlaygroundElems, tempEditorElems] = this.recursiveCreateElements(
          elem.children,
          playgroundElem.element,
          editorElem.element,
        )
        playgroundElems.push(...tempPlaygroundElems)
        editorElems.push(...tempEditorElems)
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

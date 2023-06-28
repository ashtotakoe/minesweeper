import { CreateElementTupleParam, GameElementsConstructor, LevelElem } from '../../models/interfaces'
import { GameElement } from '../../utils/game-element'
import { gameElementClasses } from '../../constants/game-element-classes'
import { gameELementTextNodes } from '../../constants/game-element-text-nodes'
import { emitter } from '../../utils/event-emitter'
import { BaseComponent } from '../../utils/base-component'
import { gameElementAbstractions } from '../../constants/game-element-abstractions'

export class GameElements {
  private playground: HTMLElement
  private editor: HTMLElement
  private id = 0

  private playgroundElems: GameElement[] = []
  private editorElems: GameElement[] = []

  public abstractDOMModel: HTMLElement = new BaseComponent({
    tag: 'section',
  }).element

  constructor({ playground, editor }: GameElementsConstructor) {
    this.playground = playground
    this.editor = editor
    emitter.subscribe('change level', (args: LevelElem) => this.createElements(args))
  }

  public createElements(level: LevelElem): void {
    this.resetAll()
    const abstractBase = this.createAbstractDOM(level, this.abstractDOMModel)

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

    this.childrenIteration(level, baseElements, abstractBase)

    baseElements[1].element.append(textAfterBaseElem)
  }

  private childrenIteration(level: LevelElem, baseElements: GameElement[], abstractBase: HTMLElement): void {
    level.children.forEach((elem) => {
      const elemAbstraction = this.createAbstractDOM(elem, abstractBase)

      const [playgroundElem, editorElem] = this.createElementTuple({
        elem,
        id: this.id++,
        parentPlayground: baseElements[0].element,
        parentEditor: baseElements[1].element,
      })

      const [textBeforeEditorElem, textAfterEditorElem] = this.getTextNodes(elem)

      this.playgroundElems.push(playgroundElem)
      this.editorElems.push(editorElem)

      editorElem.element.append(textBeforeEditorElem)

      if (elem.children.length !== 0) {
        elem.children.forEach((child) => {
          this.createAbstractDOM(child, elemAbstraction)

          const [playgroundChild, editorChild] = this.createElementTuple({
            elem: child,
            parentPlayground: playgroundElem.element,
            parentEditor: editorElem.element,
            id: this.id++,
          })

          const [editorChildTextContent] = this.getTextNodes(child)
          Object.assign(editorChild.element, { textContent: editorChildTextContent })

          this.playgroundElems.push(playgroundChild)
          this.editorElems.push(editorChild)
        })
      }

      editorElem.element.append(textAfterEditorElem)
    })
  }

  private getTextNodes(elem: LevelElem): string[] {
    let tag = gameELementTextNodes[elem.name][0]

    if (elem.className) {
      tag += ' class="'
      elem.className.split(' ').forEach((className) => {
        tag += `${className} `
      })

      tag = tag
        .split('')
        .slice(0, tag.length - 1)
        .join('')

      tag += '"'
    }

    if (elem.attributes) {
      tag += ' '

      Object.keys(elem.attributes).forEach((attribute) => {
        if (elem.attributes !== undefined) {
          tag += attribute
          const value = elem.attributes[attribute]
          if (value !== '') {
            tag += `="${value}"`
          }
        }
      })
    }

    tag += '>'

    return [tag, gameELementTextNodes[elem.name][1]]
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
      gameElement.element.addEventListener('mouseover', (e: Event) => this.mouseEventHandler(e))
      gameElement.element.addEventListener('mouseout', (e: Event) => this.mouseEventHandler(e))
    })

    if (elem.isTarget) {
      playgroundElem.element.classList.add('jumping')
    }

    return gameElementTuple
  }

  private createAbstractDOM(elem: LevelElem, parent: HTMLElement): HTMLElement {
    const abstraction = new BaseComponent({
      tag: gameElementAbstractions[elem.name],
    }).element

    if (elem.isTarget) {
      abstraction.setAttribute('data-target', 'true')
    }

    if (elem.className) {
      Object.assign(abstraction, { className: elem.className })
    }

    if (elem.attributes) {
      Object.keys(elem.attributes).forEach((attribute) => {
        if (elem.attributes !== undefined) {
          abstraction.setAttribute(attribute, elem.attributes[attribute])
        }
      })
    }

    parent.append(abstraction)

    return abstraction
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

  private resetAll(): void {
    this.playgroundElems = []
    this.editorElems = []
    this.id = 0
    this.playground.replaceChildren()
    this.editor.replaceChildren()
    this.abstractDOMModel = new BaseComponent({
      tag: 'section',
    }).element
  }
}

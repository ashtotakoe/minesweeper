import { BaseComponent } from '../../../utils/base-component'
import { Editor } from '../editor/editor'
import { Playground } from '../playground/playground'
import { GameElements } from '../game-elements/game-elements'
import { Header } from '../header/header'
import { SideBar } from '../side-bar/side-bar'
import { GameElement } from '../../../utils/game-element'

export class Layout {
  public init(parent: HTMLElement): Record<string, BaseComponent | GameElement[][]> {
    const header = new Header(parent)
    const main = new BaseComponent({ tag: 'main', parent })
    const gameBoard = new Playground(main.element)
    const editor = new Editor(main.element)
    const gameElements = new GameElements({ playground: gameBoard.element, editor: editor.element })
    const sideBar = new SideBar(main.element)
    return { header, main, gameBoard, editor, sideBar, gameElements: gameElements.elements }
  }
}

import { BaseComponent } from '../../../utils/base-component'
import { Editor } from './editor'
import { GameBoard } from './game-board'
import { Header } from './header'
import { SideBar } from './side-bar'

export class Layout {
  public init(parent: HTMLElement): [Header, BaseComponent, GameBoard, Editor, SideBar] {
    const header = new Header(parent)
    const main = new BaseComponent({ tag: 'main', parent })
    const gameBoard = new GameBoard(main.element)
    const editor = new Editor(main.element)
    const sideBar = new SideBar(main.element)
    return [header, main, gameBoard, editor, sideBar]
  }
}

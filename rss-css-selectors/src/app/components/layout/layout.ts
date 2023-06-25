import { BaseComponent } from '../../utils/base-component'
import { Editor } from '../editor/editor'
import { Playground } from '../playground/playground'
import { GameElements } from '../game-elements/game-elements'
import { Header } from '../header/header'
import { SideBar } from '../side-bar/side-bar'
import { levels } from '../../constants/levels'
import { EditorWrapper } from '../editor-wrapper/editor-wrapper'
import { EditorCSS } from '../editor-css/editor-css'

export class Layout {
  public init(parent: HTMLElement): Record<string, BaseComponent | GameElements> {
    const header = new Header(parent)
    const main = new BaseComponent({ tag: 'main', parent })
    const gameBoard = new Playground(main.element)
    const editorWrapper = new EditorWrapper(main.element)
    const editorHTML = new Editor(editorWrapper.element)
    const editorCSS = new EditorCSS(editorWrapper.element)
    const gameElements = new GameElements({ playground: gameBoard.element, editor: editorHTML.element })
    gameElements.createElements(levels[0].structure)
    const sideBar = new SideBar(main.element)
    return { header, main, editorWrapper, gameBoard, editorHTML, editorCSS, sideBar, gameElements }
  }
}

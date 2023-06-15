import { Editor } from './editor'
import { GameBoard } from './game-board'
import { Header } from './header'

export class Layout {
  public init(parent: HTMLElement): [Header, GameBoard, Editor] {
    const header = new Header(parent)
    const gameBoard = new GameBoard(parent)
    const editor = new Editor(parent)
    return [header, gameBoard, editor]
  }
}

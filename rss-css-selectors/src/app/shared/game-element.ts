import { BaseComponent } from './base-component'

export class GameElement extends BaseComponent {
  public id: number
  constructor(parent: HTMLElement, id: number, attribute: Record<string, string>) {
    super({ parent, attribute })
    this.id = id
  }
}

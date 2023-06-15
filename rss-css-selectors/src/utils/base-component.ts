import { BaseComponentProps } from '../types/interface'

export class BaseComponent {
  public element
  constructor({ tag = 'div', parent, attribute }: BaseComponentProps) {
    this.element = document.createElement(tag)
    if (parent) {
      parent.append(this.element)
    }
    if (attribute) {
      Object.assign(this.element, attribute)
    }
  }
}

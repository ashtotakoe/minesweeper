import { BaseComponent } from 'src/app/utils/base-component'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Garage } from '../garage/garage'

export class Layout {
  public init(parent: HTMLElement): BaseComponent[] {
    const header = new Header(parent)
    const garage = new Garage(parent)
    const footer = new Footer(parent)
    return [header, garage, footer]
  }
}

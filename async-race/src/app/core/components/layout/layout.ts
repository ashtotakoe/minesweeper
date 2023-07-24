import { BaseComponent } from 'src/app/utils/base-component'
import { Router } from 'src/app/utils/router'
import { Garage } from 'src/app/garage/garage'
import { Winners } from 'src/app/winners/winners'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { NotFound } from '../not-found/not-found'

export class Layout {
  public init(parent: HTMLElement): Record<string, BaseComponent | Router> {
    const garage = new Garage()
    const routes = {
      '': garage,
      '#garage': garage,
      '#winners': new Winners(),
      '#not-found': new NotFound(),
    }

    const header = new Header(parent)
    const main = new BaseComponent({
      tag: 'main',
      parent,
      attribute: {
        className: 'main',
      },
    })

    const router = new Router(routes, main.element)

    const footer = new Footer(parent)
    return { header, router, footer }
  }
}

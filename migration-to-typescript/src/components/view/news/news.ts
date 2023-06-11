import './news.css'
import { Article } from '../../../interfaces/interfaces'

class News {
  public draw(data: Article[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data

    const fragment = document.createDocumentFragment()
    const newsItemTemp = document.querySelector('.news-container')
    if (newsItemTemp instanceof HTMLTemplateElement) {
      news.forEach((item, idx) => {
        const newsClone = newsItemTemp.content.cloneNode(true)

        if (idx % 2 && newsClone instanceof DocumentFragment) {
          const newsItem = newsClone.querySelector('.news__item')
          if (newsItem instanceof HTMLDivElement) {
            newsItem.classList.add('alt')
          }
        }
        if (newsClone instanceof DocumentFragment) {
          this.setProps(this.getElements(newsClone), item)
          fragment.append(newsClone)
        }
      })

      const newsElement = document.querySelector('.news')
      if (newsElement instanceof HTMLElement) {
        newsElement.innerHTML = ''
        newsElement.appendChild(fragment)
      }
    }
  }
  private getElements(newsClone: DocumentFragment): Record<string, HTMLElement> {
    return {
      metaPhoto: this.getElement<HTMLElement>(newsClone, '.news__meta-photo'),
      metaAuthor: this.getElement<HTMLElement>(newsClone, '.news__meta-author'),
      metaDate: this.getElement<HTMLElement>(newsClone, '.news__meta-date'),
      descriptionTitle: this.getElement<HTMLElement>(newsClone, '.news__description-title'),
      descriptionSource: this.getElement<HTMLElement>(newsClone, '.news__description-source'),
      descriptionContent: this.getElement<HTMLElement>(newsClone, '.news__description-content'),
      readMore: this.getElement<HTMLElement>(newsClone, '.news__read-more a'),
    }
  }

  private getElement<T extends HTMLElement>(root: DocumentFragment, selector: string): T {
    const element = root.querySelector<T>(selector)
    if (element) {
      return element
    }
    throw new Error('egor! ne smotry!')
  }
  private setProps(elements: Record<string, HTMLElement>, item: Article): void {
    const changingTextElements: Record<string, string> = {
      metaAuthor: item.author || item.source.name,
      metaDate: item.publishedAt.slice(0, 10).split('-').reverse().join('-'),
      descriptionTitle: item.title,
      descriptionSource: item.source.name,
      descriptionContent: item.description,
    }
    Object.keys(elements).forEach((key) => {
      if (Object.keys(changingTextElements).includes(key)) {
        Object.assign(elements[key], {
          textContent: changingTextElements[key],
        })
      }
    })

    Object.assign(elements.metaPhoto.style, {
      backgroundImage: `url(${item.urlToImage || 'img/news_placeholder.jpg'})`,
    })
    elements.readMore.setAttribute('href', item.url)
  }
}

export default News

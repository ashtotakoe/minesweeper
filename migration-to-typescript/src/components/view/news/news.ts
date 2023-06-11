import './news.css'
import { Article } from '../../../interfaces/interfaces'

class News {
  public draw(data: Article[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data

    const fragment = document.createDocumentFragment()
    const newsItemTemp = document.querySelector('#newsItemTemp')
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
  private getElements(newsClone: DocumentFragment): HTMLElement[] {
    return [
      this.getElement<HTMLElement>(newsClone, '.news__meta-photo'),
      this.getElement<HTMLElement>(newsClone, '.news__meta-author'),
      this.getElement<HTMLElement>(newsClone, '.news__meta-date'),
      this.getElement<HTMLElement>(newsClone, '.news__description-title'),
      this.getElement<HTMLElement>(newsClone, '.news__description-source'),
      this.getElement<HTMLElement>(newsClone, '.news__description-content'),
      this.getElement<HTMLElement>(newsClone, '.news__read-more a'),
    ]
  }

  private getElement<T extends HTMLElement>(root: DocumentFragment, selector: string): T {
    const element = root.querySelector<T>(selector)
    if (element) {
      return element
    }
    throw new Error('egor! ne smotry!')
  }
  private setProps(elements: HTMLElement[], item: Article): void {
    const [
      metaPhoto,
      metaAuthor,
      metaDate,
      descriptionTitle,
      descriptionSource,
      descriptionContent,
      readMore,
    ] = elements
    metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`
    metaAuthor.textContent = item.author || item.source.name
    metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-')
    descriptionTitle.textContent = item.title
    descriptionSource.textContent = item.source.name
    descriptionContent.textContent = item.description
    readMore.setAttribute('href', item.url)
  }
}

export default News

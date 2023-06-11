export interface ResponseNews {
  articles: Article[]
  status: string
  totalResults: number
}
export interface Article {
  author: string
  content: string
  description: string
  publishedAt: string
  source: ArticleSource
  title: string
  url: string
  urlToImage: string
}

export interface ArticleSource {
  id: string
  name: string
}

export interface ResponseSource {
  sources: Source[]
  status: string
}

export interface Source {
  category: string
  country: string
  description: string
  id: string
  language: string
  name: string
  url: string
}

export interface LoaderOptions {
  apiKey: string
}

export interface GetRespParam {
  endpoint: string
  options?: GetRespOptions
}

export interface GetRespOptions {
  sources?: string
}

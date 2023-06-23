export interface BaseComponentProps {
  tag?: keyof HTMLElementTagNameMap
  attribute?: Record<string, string>
  parent?: HTMLElement
}

export interface LevelElem {
  name: 'base' | 'plate' | 'apple' | 'bento'
  children: LevelElem[]
}

export interface GameElementsConstructor {
  playground: HTMLElement
  editor: HTMLElement
}

export interface CreateElementTupleParam {
  elem: LevelElem
  parentPlayground: HTMLElement
  parentEditor: HTMLElement
  id: number
}

export interface GameElementConstructor {
  parent: HTMLElement
  id: number
  attribute?: Record<string, string>
  tag?: keyof HTMLElementTagNameMap
}

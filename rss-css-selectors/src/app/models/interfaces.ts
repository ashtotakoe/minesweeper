import { LevelElemName } from '../types/type'

export interface BaseComponentProps {
  tag?: string
  attribute?: Record<string, string>
  parent?: HTMLElement
}

export interface LevelElem {
  name: LevelElemName
  children: LevelElem[]
  isTarget?: boolean
  className?: string
  attributes?: Record<string, string>
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

export interface LevelConstructor {
  serialNumber: number
  targetsCount?: number
  structure: LevelElem
  answer?: string[]
  task?: string
}

export interface GameStateConstructor {
  currentLevel: number
}

export interface BaseComponentProps {
  tag?: keyof HTMLElementTagNameMap
  classList?: string[]
  attribute?: Record<string, string>
  parent?: HTMLElement
  textContent?: string
}

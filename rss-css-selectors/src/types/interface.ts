export interface BaseComponentProps {
  tag?: keyof HTMLElementTagNameMap
  attribute?: Record<string, string>
  parent?: HTMLElement
}

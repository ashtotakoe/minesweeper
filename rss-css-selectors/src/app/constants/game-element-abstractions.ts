import { LevelElemName } from '../types/type'

export const gameElementAbstractions: Record<LevelElemName, keyof HTMLElementTagNameMap> = {
  plate: 'div',
  bento: 'p',
  apple: 'img',
  base: 'div',
}

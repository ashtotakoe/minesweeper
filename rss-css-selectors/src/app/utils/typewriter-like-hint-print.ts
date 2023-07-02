import { changeElementValue } from './change-element-value'

export const typewriterLikeHintPrint = async (element: HTMLElement, hint: string): Promise<void> => {
  changeElementValue(element, '')
  hint.split('').forEach(async (char) => {
    let str = ''
    await setTimeout(() => {
      str += char
      changeElementValue(element, str)
    }, 1000)
  })
}

export const changeElementValue = (element: HTMLElement, value: string): void => {
  if (element instanceof HTMLInputElement) {
    Object.assign(element, { value })
  }
}

export function onClick(element: HTMLElement, callback: () => void) {
  element.addEventListener('click', () => {
    callback()
  })
  element.removeEventListener('click', () => {
    callback()
  })
}

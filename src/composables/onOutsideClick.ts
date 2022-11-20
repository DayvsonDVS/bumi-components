import { Ref } from 'vue'
import { useEventListener } from '@/composables/useEventListener'

export function onOutsideClick(
  target: Ref<HTMLElement | undefined>,
  callback: () => void
) {
  useEventListener('click', (event) => {
    const clickedElement = event.target as HTMLElement
    if (!target.value?.contains(clickedElement)) {
      callback()
    }
  })
}

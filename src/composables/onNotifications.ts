import Alert from '@/components/Alert.vue'
import { NotificationsProps } from '@/types'
import { createApp } from 'vue'

export function useNotifications(props: NotificationsProps) {
  const wrapper = document.createElement('div')
  const bodyElement = document.body
  const notification = document.getElementById('notifications')
  const componentApp = createApp(Alert, props as {})

  wrapper.classList.add('notifications', props.position!)
  wrapper.setAttribute('id', 'notifications')

  componentApp.mount(wrapper)

  if (notification === null) {
    bodyElement?.append(wrapper)
  } else if (!props.ignoreDuplicates) {
    notification.append(wrapper.firstElementChild!)
  }
}

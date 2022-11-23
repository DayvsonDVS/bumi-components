import mitt from 'mitt'
import { Tab } from '@/types'

type Events = {
  addTab: Tab
  setActiveTab: { uid: number }
}

const eventBus = mitt<Events>()

export { eventBus }

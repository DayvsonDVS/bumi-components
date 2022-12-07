import { createApp } from 'vue'
import App from './Server.vue'
import router from '@/dev/plugins/router'

createApp(App).use(router).mount('#app')

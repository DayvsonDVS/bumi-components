import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/dev/views/profile.vue')
  },
  {
    path: '/general',
    name: 'general',
    component: () => import('@/dev/views/General.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('@/dev/views/Password.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('@/dev/views/notifications.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

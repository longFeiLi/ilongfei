import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/index.vue'

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'longfei',
    },
  },
  {
    path: '/skill',
    component: () => import('@/pages/skill.vue'),
    meta: {
      title: 'longfei skill',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
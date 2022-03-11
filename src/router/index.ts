import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw>  = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
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
  routes: constantRoutes
})

export default router
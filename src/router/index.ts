import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index.vue')
      },
      {
        path: '/skill',
        name: 'skill',
        component: () => import('@/views/skill.vue')
      },
      {
        path: '/morning-paper',
        name: 'morning-paper',
        component: () => import('@/views/morning-paper.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
      },
      {
        path: '/404',
        name: 'user',
        component: () => import('@/views/index.vue')
      },
      {
        path: '/:catchAll(.*)', // 匹配不到页面的时候
        redirect: '/404'
      }
    ]
  });
}

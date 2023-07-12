import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/CompositionAPI/lession1',
      name: 'lession1',
      component: () => import('../views/CompositionAPI/LessionOne.vue')
    },
    {
      path: '/CompositionAPI/lession2',
      name: 'lession2',
      component: () => import('../views/CompositionAPI/LessionTwo.vue')
    }
  ]
})

export default router

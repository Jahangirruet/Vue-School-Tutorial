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
    },
    {
      path: '/CompositionAPI/lession3',
      name: 'lession3',
      component: () => import('../views/CompositionAPI/LessionThree.vue')
    },
    {
      path: '/CompositionAPI/lession4',
      name: 'lession4',
      component: () => import('../views/CompositionAPI/LessionFour.vue')
    },
    {
      path: '/CompositionAPI/lession5',
      name: 'lession5',
      component: () => import('../views/CompositionAPI/LessionFive.vue')
    },
    {
      path: '/CompositionAPI/lession6',
      name: 'lession6',
      component: () => import('../views/CompositionAPI/LessionSix.vue')
    },
    {
      path: '/CompositionAPI/lession7',
      name: 'lession7',
      component: () => import('../views/CompositionAPI/LessionSeven.vue')
    },
    {
      path: '/CompositionAPI/lession8',
      name: 'lession8',
      component: () => import('../views/CompositionAPI/LessionEight.vue')
    },
    {
      path: '/CompositionAPI/lession9',
      name: 'lession9',
      component: () => import('../views/CompositionAPI/LessionNine.vue')
    },
    {
      path: '/CompositionAPI/lession10',
      name: 'lession10',
      component: () => import('../views/CompositionAPI/LessionTen.vue')
    },
    {
      path: '/CompositionAPI/lession11',
      name: 'lession11',
      component: () => import('../views/CompositionAPI/LessionEleven.vue')
    },
    {
      path: '/CompositionAPI/lession12',
      name: 'lession12',
      component: () => import('../views/CompositionAPI/LessionTwelve.vue')
    },
    {
      path: '/CompositionAPI/lession13',
      name: 'lession13',
      component: () => import('../views/CompositionAPI/LessionThirteen.vue')
    },
    {
      path: '/CompositionAPI/lession14',
      name: 'lession14',
      component: () => import('../views/CompositionAPI/LessionForteen.vue')
    }
  ]
})

export default router

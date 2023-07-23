import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    // pinia
    {
      path: '/pinia/lession1',
      name: 'lession1',
      component: () => import('../views/pinia/LessionOne.vue')
    },
    {
      path: '/pinia/lession2',
      name: 'lession2',
      component: () => import('../views/pinia/LessionTwo.vue')
    },
    {
      path: '/pinia/lession3',
      name: 'lession3',
      component: () => import('../views/pinia/LessionThree.vue')
    },
    {
      path: '/pinia/lession4',
      name: 'lession4',
      component: () => import('../views/pinia/LessionFour.vue')
    },
    {
      path: '/pinia/lession5',
      name: 'lession5',
      component: () => import('../views/pinia/LessionFive.vue')
    },
    {
      path: '/pinia/lession6',
      name: 'lession6',
      component: () => import('../views/pinia/LessionSix.vue')
    },
    {
      path: '/pinia/lession7',
      name: 'lession7',
      component: () => import('../views/pinia/LessionSeven.vue')
    },
    {
      path: '/pinia/lession8',
      name: 'lession8',
      component: () => import('../views/pinia/LessionEight.vue')
    },
    {
      path: '/pinia/lession9',
      name: 'lession9',
      component: () => import('../views/pinia/LessionNine.vue')
    },
    {
      path: '/pinia/lession10',
      name: 'lession10',
      component: () => import('../views/pinia/LessionTen.vue')
    },
    {
      path: '/pinia/lession11',
      name: 'lession11',
      component: () => import('../views/pinia/LessionEleven.vue')
    },
    {
      path: '/pinia/lession12',
      name: 'lession12',
      component: () => import('../views/pinia/LessionTwelve.vue')
    },
    {
      path: '/pinia/lession13',
      name: 'lession13',
      component: () => import('../views/pinia/LessionThirteen.vue')
    },
    {
      path: '/pinia/lession14',
      name: 'lession14',
      component: () => import('../views/pinia/LessionForteen.vue')
    }
  ]
})

export default router

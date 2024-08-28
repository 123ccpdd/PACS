import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      // 后期改成show
      redirect: '/show',
      children: [
        {
          path: '/show',
          component: () => import('@/views/show/MainView.vue')
        },
        {
          path: '/Analysis',
          component: () => import('@/views/show/Focus Analysis.vue')
        },
        {
          path: '/test',
          component: () => import('@/views/TestComponent.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') return '/login'
})

export default router

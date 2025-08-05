import { createRouter, createWebHistory } from 'vue-router'

const fixedRouters: any[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...fixedRouters],
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)

  next()
})

export default router

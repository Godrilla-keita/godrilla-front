import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import MyPageView from '@/views/MyPageView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'my-page',
    component: MyPageView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

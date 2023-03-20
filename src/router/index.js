import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "首页"
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

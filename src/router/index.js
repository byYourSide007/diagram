import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'
import SignUp from "@/views/signup/SignUp";
import ProfileCenter from "@/views/profile/ProfileCenter";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "首页"
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileCenter
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

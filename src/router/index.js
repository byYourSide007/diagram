import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/login/LoginView.vue'
import SignUp from "../views/signup/SignUp.vue";
import ProfileCenter from "../views/profile/ProfileCenter.vue";
import PersonalCenter from "../views/center/PersonalCenter.vue";
import BluePrint from "../views/blueprint/BluePrint.vue";
import SettingsConfig from "../views/settings/SettingsConfig.vue";

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
    component: ProfileCenter,
    children: [
      // {
      //   path: '',
      //   name: "default",
      //   components: PersonalCenter
      // },
      {
        path: 'message',
        name: "message",
        component: PersonalCenter
      },
      {
        path: 'blueprint',
        name: 'blueprint',
        component: BluePrint
      },
      {
        path: 'settings',
        name: 'settings',
        component: SettingsConfig
      }
    ]
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

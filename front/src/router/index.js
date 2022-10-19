import { createRouter, createWebHashHistory } from 'vue-router'
import HomeConnection from "../views/HomeConnection.vue";
import ConnectionSigin from "../views/ConnectionSignin.vue";
import ConnectionLogin from "../views/ConnectionLogin.vue";
import HomeConnected from "../views/HomeConnected.vue";
const routes = [
  {
    path: '/',
    name: 'HomeConnection',
    component: HomeConnection
  },
  {
    path: '/connectionSignin',
    name: 'ConnectionSignin',
    component: ConnectionSigin
  },
  {
    path: '/connectionLogin',
    name: 'ConnectionLogin',
    component: ConnectionLogin
  },
  {
    path: '/homeConnected',
    name: 'HomeConnected',
    component: HomeConnected
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

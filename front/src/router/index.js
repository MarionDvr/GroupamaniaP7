import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeConnection',
    component: () => import(/* webpackChunkName: "HomeConnection" */'../views/HomeConnection.vue')
  },
  {
    path: '/connectionSignin',
    name: 'ConnectionSignin',
    component: () => import(/* webpackChunkName: "ConnectionSignin" */'../views/ConnectionSignin.vue')
  },
  {
    path: '/connectionLogin',
    name: 'ConnectionLogin',
    component: () => import(/* webpackChunkName: "ConnectionLogin" */'../views/ConnectionLogin.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

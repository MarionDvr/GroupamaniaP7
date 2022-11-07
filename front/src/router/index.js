import { VueRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)

import HomeConnection from "../views/HomeConnection.vue";
import ConnectionSigin from "../views/ConnectionSignin.vue";
import ConnectionLogin from "../views/ConnectionLogin.vue";
import HomeConnected from "../views/HomeConnected.vue";
import CreatePost from "../views/CreatePost.vue";
import UserProfil from "../views/UserProfil.vue";
import ModifyPost from "../views/ModifyPost.vue";


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
  },
  {
    path: '/createPost',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/userProfil',
    name: 'UserProfil',
    component: UserProfil
  },
  {
    path: '/modifyPost',
    name: 'ModifyPost',
    component: ModifyPost
  }

  
]

const router = new VueRouter({
  history: createWebHashHistory(),
  routes
})

export default router



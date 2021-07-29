import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../page/Home.vue';
import Login from '../page/Login.vue';
import Register from '../page/Register.vue';
import LoginAdm from '../page/LoginAdm'



const routes = [
  {
    path: '/home',
    component: Home
  },

  {
    path: '/login',
    component: Login
  },
  
  {
    path: '/register',
    component: Register
  },

  {
    path: '/loginAdm',
    component: LoginAdm
  }
   
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

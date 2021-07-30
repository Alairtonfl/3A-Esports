import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../page/Home.vue';
import Login from '../page/Login.vue';
import Register from '../page/Register.vue';




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

   
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../page/Home.vue';
import Login from '../page/Login.vue';
import Register from '../page/Register.vue';
import RegisterAdm from '../page/RegisterAdm.vue';
import Dashboard from '../page/Dashboard';
import InfoProduct from '../page/InfoProduct'

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
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
    path: '/admin/register',
    component: RegisterAdm
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/info',
    component: InfoProduct
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

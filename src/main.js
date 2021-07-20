// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'
import router from './Routes/router'
import $ from 'jquery';
import Popper from 'popper.js';
window.jQuery = window.$ = $;
window.Popper = Popper;
// require('bootstrap');
Vue.config.productionTip = false


/* eslint-disable no-new */


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

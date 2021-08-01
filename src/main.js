import Vue from 'vue'
import App from './App'
import router from './Routes/router'

//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

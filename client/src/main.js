import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import { router } from './router'


Vue.prototype.$token = null

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import auth from './lib/auth'
import axios from 'axios'
import Toasted from 'vue-toasted'

Vue.prototype.$http = axios
axios.defaults.headers.common['Authorization'] = auth.getAuthHeader()

Vue.use(BootstrapVue)
Vue.use(Toasted)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

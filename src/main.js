import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import router from 'src/router'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

import store from 'src/store'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})

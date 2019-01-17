import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/css/main.css'
import './assets/css/util.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLock)

library.add(faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import './assets/fonts/iconic/css/material-design-iconic-font.min.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

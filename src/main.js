import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import Icon from 'vue2-svg-icon/Icon.vue'

Vue.component('icon', Icon)

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

Vue.use(VueMaterial)


Vue.use(BootstrapVue)

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

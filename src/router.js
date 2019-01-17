import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import test from './views/test.vue'
import register from './views/register.vue'
import home from './views/home.vue'
import clock from './components/clock.vue'
import countdown from './components/countdown.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/clock',
      name: 'clock',
      component: clock
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: countdown
    },
    { path: '*', redirect: '/' }
  ]
})

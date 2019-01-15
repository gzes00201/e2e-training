import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Register from './views/register.vue'
import HomePage from './views/homepage.vue'
import Test from './views/test.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component:Register
    },
    {
      path: '/homepage',
      name: 'homepage',
      component:HomePage
    },
    {
      path: '/test',
      name: 'test',
      component:Test
    }
  ]
})

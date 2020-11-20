import Vue from 'vue'
import Router from 'vue-router'

import topPage from '@/components/topPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: topPage
    }
  ]
})

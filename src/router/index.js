import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Doc from '@/components/Doc/Doc'
import Installation from '@/components/Doc/Installation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Doc/:id',
      component: Doc,
      children: [
        {path: 'Installation', component: Installation}
      ]
    }
  ]
})

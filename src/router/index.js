import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Documentation from '@/components/Documentation/Documentation'
import Installation from '@/components/Documentation/Installation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Documentation',
      name: 'Documentation',
      component: Documentation,
      children: [
        {
          path: 'Installation',
          component: Installation,
          name: 'Documentation/Installation'
        }
      ]
    }
  ]
})

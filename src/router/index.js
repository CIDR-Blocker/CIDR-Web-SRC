import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Documentation from '@/components/Documentation/Documentation'
import Introduction from '@/components/Documentation/Introduction'
import Installation from '@/components/Documentation/Setup/Installation'

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
          path: '',
          name: 'Documentation/Introduction',
          component: Introduction
        },
        {
          path: 'Installation',
          component: Installation,
          name: 'Documentation/Setup/Installation'
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Documentation from '@/components/Documentation/Documentation'
import Introduction from '@/components/Documentation/Introduction'
import Installation from '@/components/Documentation/Setup/Installation'
import Troubleshooting from '@/components/Documentation/Setup/Troubleshooting'

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
      component: Documentation,
      children: [
        {
          path: '',
          name: 'Documentation',
          component: Introduction
        },
        {
          path: 'Installation',
          component: Installation,
          name: 'Documentation/Setup/Installation'
        },
        {
          path: 'Troubleshooting',
          component: Troubleshooting,
          name: 'Documentation/Setup/Troubleshooting'
        }
      ]
    }
  ]
})

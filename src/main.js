// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import VueAnalytics from 'vue-analytics'

import 'bulma/css/bulma.css'
import 'buefy/lib/buefy.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.css'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

Vue.use(VueAnalytics, {
  id: 'UA-68577666-4',
  checkDuplicatedScript: true
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

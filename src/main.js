// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

import 'bulma/css/bulma.css'
import 'buefy/lib/buefy.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.css'

Raven
    .config('https://2330bd2a4151495eb101fe6e7c6b261a@sentry.io/231523')
    .addPlugin(RavenVue, Vue)
    .install()

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Vuex)

window.moment = require('moment')
window.axios = require('axios')
window.axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store: require('./store').default
}).$mount('#app')

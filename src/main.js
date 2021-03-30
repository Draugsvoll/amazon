import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//* setup routes
import VueRouter from 'vue-router'
// import { routes } from './routes'
import router from './routes'
Vue.use(VueRouter)

// store
import store from './store/store'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

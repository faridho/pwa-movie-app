import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use({ iconfont: 'mdi' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

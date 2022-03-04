import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from './util/http'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios);
Vue.config.productionTip = false
// Vue.prototype.$http = axios

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

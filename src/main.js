import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import register from './components/content/register/index'
import VueLazyload from "vue-lazyload";
import $ from 'jquery'
import 'font-awesome/css/font-awesome.css'
Vue.config.productionTip = false
Vue.use(register)
Vue.use(VueLazyload)
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app',{
  loading:require('assets/img/lazyload.jpg')
})

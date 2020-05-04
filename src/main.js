import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import register from './components/content/register/index'
import VueLazyload from "vue-lazyload";
import 'font-awesome/css/font-awesome.css'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(register)
Vue.use(VueLazyload,
    {
      loading:require('assets/img/lazyload.jpg')
    })
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

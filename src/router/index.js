import Vue from 'vue'
import VueRouter from 'vue-router'
const Home= () => import ('views/home/Home.vue')
const Login=()=> import('views/login/Login.vue')
Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

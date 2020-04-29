import Vue from 'vue'
import VueRouter from 'vue-router'
const Home= () => import ('views/home/Home.vue')
const Login=()=> import('views/login/Login.vue')
const Eval=()=> import('views/eval/Eval.vue')
const Profile=()=>import('views/profile/Profile')
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
    },{
      path:'/eval',
      component:Eval
    },{
      path:'/profile',
      component:Profile
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

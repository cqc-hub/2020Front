import Vue from 'vue'
import VueRouter from 'vue-router'
const Home= () => import ('views/home/Home.vue')
const Login=()=> import('views/login/Login.vue')
const Eval=()=> import('views/eval/Eval.vue')
const Profile=()=>import('views/profile/Profile')
const Reg=()=>import('views/reg/Reg')

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      meta: { index: 1 }
    },
    {
      path:'/login',
      component:Login,
      meta: { index: 4 }
    },{
      path:'/eval',
      component:Eval,
      meta: { index: 2 }
    },{
      path:'/profile',
      component:Profile,
      meta: { index: 3 }
    },{
      path:'/reg',
      component:Reg,
      meta: { index: 5 }
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

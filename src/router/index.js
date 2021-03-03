import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import list from '../views/list.vue'
import pay from '../views/pay.vue'
import detail from '../views/detail.vue'

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:'home'
    },
    {
      path:'/home',
      name:'home',
      component:home,
      meta:{keepAlive:true}
    },
    {
      path:'/list',
      name:'list',
      component:list
    },
    {
      path:'/pay',
      name:'pay',
      component:pay
    },
    {
      path:'/detail',
      name:'detail',
      component:detail
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

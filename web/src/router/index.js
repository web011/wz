import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home'
import Article from '../views/Article'
import Hero from '../views/Hero'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {path:'/',name:'home',component:Home},
      {path:'/articles/:id',name:'article',component:Article,props:true},
    ]
  },
  {path:'/heroes/:id',name:'hero',component:Hero,props:true}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

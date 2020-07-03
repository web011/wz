import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import CategoryEdit from '../views/CategoryEdit'
import CategorList from '../views/CategorList'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/CategoryEdit/create',component:CategoryEdit},
      {path:'/CategorList/list',component:CategorList},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import CategoryEdit from '../views/CategoryEdit'
import CategorList from '../views/CategorList'
import ItemEdit from '../views/ItemEdit'
import ItemList from '../views/ItemList'
import HeroesEdit from '../views/HeroesEdit'
import HeroesList from '../views/HeroesList'
import ArticleEdit from '../views/ArticleEdit'
import ArticleList from '../views/ArticleList'
import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'
import AdminUserEdit from '../views/AdminUserEdit'
import AdminUserList from '../views/AdminUserList'
import Login from '../views/Login'

Vue.use(VueRouter)

  const routes = [
  {path: '/login',name:'login',component:Login,meta:{inPublic:true}},
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategoryEdit},
      {path:'/categories/edit/:id',component:CategoryEdit,props:true},
      {path:'/categories/list',component:CategorList},


      {path:'/items/create',component:ItemEdit},
      {path:'/items/edit/:id',component:ItemEdit,props:true},
      {path:'/items/list',component:ItemList},

      {path:'/Heroes/create',component:HeroesEdit},
      {path:'/Heroes/edit/:id',component:HeroesEdit,props:true},
      {path:'/Heroes/list',component:HeroesList},

      {path:'/articles/create',component:ArticleEdit},
      {path:'/articles/edit/:id',component:ArticleEdit,props:true},
      {path:'/articles/list',component:ArticleList},

      {path:'/Ads/create',component:AdEdit},
      {path:'/Ads/edit/:id',component:AdEdit,props:true},
      {path:'/Ads/list',component:AdList},

      {path:'/admin_users/create',component:AdminUserEdit},
      {path:'/admin_users/edit/:id',component:AdminUserEdit,props:true},
      {path:'/admin_users/list',component:AdminUserList},
    ]
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) =>{
  if(!to.meta.inPublic && !localStorage.token){
    return next('/login')
  }
  next();
})
export default router

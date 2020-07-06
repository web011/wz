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

Vue.use(VueRouter)

  const routes = [
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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

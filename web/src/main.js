import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'

import http from './http';
Vue.prototype.$http = http;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import Card from './components/Card'
Vue.component('m-card',Card)



import ListCard from './components/ListCard'
Vue.component('m-list-card',ListCard)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

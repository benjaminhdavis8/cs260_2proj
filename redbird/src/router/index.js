import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import SearchResults from '@/component/SearchResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/serch',
      name: 'SearchResults',
      component: SearchResults
    },
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home  from '@/views/Home'
import Schedule from '@/views/Schedule'
import Info from '@/views/Info'
import Detail from '@/views/Detail'
import Search from '@/views/Search'
import Genre from '@/views/Genre'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      meta: {
        bottomNav: true 
      },
      component: Home
    },
    {
      path: '/schedule',
      name: 'Schedule',
      meta: {
        bottomNav: true 
      },
      component: Schedule
    },
    {
      path: '/info',
      name: 'Info',
      meta: {
        bottomNav: true 
      },
      component: Info
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      meta: {
        bottomNav: false 
      },
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      meta: {
        bottomNav: false 
      },
      component: Search
    },
    {
      path: '/genre/:id',
      name: 'Genre',
      meta: {
        bottomNav: false 
      },
      component: Genre
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

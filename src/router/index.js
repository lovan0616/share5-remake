import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('../views/Event.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/org',
    name: 'Org',
    component: () => import('../views/Org.vue')
  },
  {
    path: '/thank',
    name: 'Thank',
    component: () => import('../views/Thank.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

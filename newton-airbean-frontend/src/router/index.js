import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Cart from '@/views/Cart.vue'
import Landing from '@/views/Landing.vue'
import Menu from '@/views/Menu.vue'
import Profile from '@/views/Profile.vue'
import Status from '@/views/Status.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

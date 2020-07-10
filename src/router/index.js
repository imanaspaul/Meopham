import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Specification from '../views/Specification.vue'
import Rental from '../views/Rental.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mechines-for-rental',
    name: 'rental',
    component: Rental
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/specification/:id',
    name: 'Specification',
    component: Specification
  },
  {
    path: '/rates-about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router

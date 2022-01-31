import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Maintenance from '../views/Maintenance.vue';
import Autocare from '../views/Autocare.vue';
import Insurance from '../views/Insurance.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    path: '/insurance',
    name: 'Insurance',
    component: Insurance
  },
  {
    path: '/autocare',
    name: 'Autocare',
    component: Autocare
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

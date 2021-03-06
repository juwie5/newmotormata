import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Dashboard from '../components/Dashboard.vue'
import PeriodicServices from '../views/PeriodicServices.vue';
import Autocare from '../views/Autocare.vue';
import Insurance from '../views/Insurance.vue';
import Spares from '../views/Spares.vue';
import Signin from '../views/Signin.vue';
import Signup from '../views/Signup.vue';
import Contact from '../views/Contact.vue';
import Profile from '../views/user/Profile.vue';
import ProfileHome from '../views/user/ProfileHome.vue';
import Messages from '../views/user/Messages.vue';
import Security from '../views/user/Security.vue';
import Settings from '../views/user/Settings.vue';
import Cart from '../views/user/Cart.vue';
import store from '@/store';




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,   
    beforeEnter: ( to, from , next) => {
        if (!store.getters['auth/authenticated']){
          return next({
            name: 'Signin'
          })
        }
        next()
    },
  },

  {
        path: '/dashboard/cart',
        name: 'Cart',
        component: Cart,
        beforeEnter: ( to, from , next) => {
          if (!store.getters['auth/authenticated']){
            return next({
              name: 'Signin'
            })
          }
          next()
      },
  },

 {
      path: '/dashboard/:profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: ( to, from , next) => {
        if (!store.getters['auth/authenticated']){
          return next({
            name: 'Signin'
          })
        }
        next()
    },
      children:[
        {
        path: '',
        name: 'ProfileHome',
        component: ProfileHome
      },
      {
        path: 'messages',
        name: 'Messages',
        component: Messages
      },
      {
        path: 'security',
        name: 'Security',
        component: Security
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
      }
    ]
    },
  {
    path:'/signup',
    name: 'Signup',
    component: Signup
 },
  {
    path:'/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path:'/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/maintenance',
    name: 'PeriodicServices',
    component: PeriodicServices
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
    path: '/repairs',
    name: 'Spares',
    component: Spares
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router



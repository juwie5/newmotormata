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
        component: function () {
          return import(/* webpackChunkName: "userhome" */ '../views/user/ProfileHome.vue')
        }
      },
      {
        path: 'messages',
        name: 'Messages',
        component: function () {
          return import(/* webpackChunkName: "usermessages" */ '../views/user/Messages.vue')
        }
      },
      {
        path: 'security',
        name: 'Security',
        component: function () {
          return import(/* webpackChunkName: "usersecurity" */ '../views/user/Security.vue')
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: function () {
          return import(/* webpackChunkName: "usersettings" */ '../views/user/Settings.vue')
        }
      }
    ]
    },
  {
    path:'/signup',
    name: 'Signup',
    component: function () {
      return import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
    }
 },
  {
    path:'/signin',
    name: 'Signin',
    component: function () {
      return import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
    }
  },
  {
    path:'/contact',
    name: 'Contact',
    component: function () {
      return import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    }
  },
  {
    path: '/maintenance',
    name: 'PeriodicServices',
    component: function () {
      return import(/* webpackChunkName: "maintenance" */ '../views/PeriodicServices.vue')
    }
  },
  {
    path: '/insurance',
    name: 'Insurance',
    component: function () {
      return import(/* webpackChunkName: "insurance" */ '../views/Insurance.vue')
    }
  },
  {
    path: '/autocare',
    name: 'Autocare',
    component: function () {
      return import(/* webpackChunkName: "autocare" */ '../views/Autocare.vue')
    }
  },
  {
    path: '/repairs',
    name: 'Spares',
    component: function () {
      return import(/* webpackChunkName: "spares" */ '../views/Spares.vue')
    }
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



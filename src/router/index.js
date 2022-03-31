import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Dashboard from '../components/Dashboard.vue'
import Maintenance from '../views/Maintenance.vue';
import Autocare from '../views/Autocare.vue';
import Insurance from '../views/Insurance.vue';
import Signin from '../views/Signin.vue';
import Signup from '../views/Signup.vue';
import Contact from '../views/Contact.vue';
import Profile from '../views/user/Profile.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,    
  },
    {
      path: '/dashboard/:profile',
      name: "Profile",
      component: Profile
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;

    }

     if (to.hash) {
        return { selector: to.hash };
    }
    return { x: 0, y: 0 }
  }
})

export default router


//const Home = { template: '#home', mounted: function(){		if(this.$router.currentRoute['hash']){ 	Vue.use(VueScrollTo); 	VueScrollTo.scrollTo(this.$router.currentRoute['hash'], 500);

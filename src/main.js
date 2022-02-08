import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faCar, faPhoneAlt, faCheck, faChevronLeft, faChevronRight, faThumbsUp, faCoins, faBinoculars, faAward, faStar} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faCar, faPhoneAlt, faCheck, faChevronRight, faChevronLeft, faThumbsUp, faCoins, faBinoculars, faAward, faStar, faFacebook, faInstagram, faTwitter, faWhatsapp)

// Vue.component('fa-icon', FontAwesomeIcon)

//createApp(App).use(router).mount('#app');

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');






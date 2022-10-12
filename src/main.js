import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap"



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faChevronUp, faCar, faPhoneAlt, faCheck, faChevronLeft, faChevronRight, faThumbsUp, faCoins, faBinoculars, faAward, faStar, faBars, faTimes, faPlus, faAngleLeft, faAngleRight, faStarHalfAlt, faStarHalf, faTimesCircle, faCaretDown, faCommentAlt, faUserAlt, faShoppingBag, faSignOutAlt, faCaretUp, faTrash, faUsers, faHandshake, faUserCheck, faClock, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faCar, faPhoneAlt, faCheck, faChevronRight, faChevronLeft, faThumbsUp, faCoins, faBinoculars, faAward, faStar, faFacebook, faInstagram, faTwitter, faWhatsapp, faBars, faTimes, faPlus, faChevronUp, faAngleLeft, faAngleRight, faStarHalf, faStarHalfAlt, faTimesCircle, faCaretDown, faCommentAlt,faUserAlt, faShoppingBag, faSignOutAlt, faCaretUp, faTrash, faUsers, faHandshake, faUserCheck, faClock, faCheckCircle )


const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueScrollTo);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');






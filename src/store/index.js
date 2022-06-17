import { createStore } from 'vuex'
import auth from './auth'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    namespaced: true,
    state:{
     
    },
    mutations: {
      
    },
    actions: {
       
    }, 
    modules:{
        auth
    },
    plugins: [createPersistedState(
     { storage: window.sessionStorage,}
    )]
  })


export default store
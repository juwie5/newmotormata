import axios from 'axios'
import router from '../router/index'

export default{
    namespaced: true,
    state:{
        token : null,
        user: null,
        error: null
    },

    getters: {
        authenticated(state){
            return state.token && state.user
        },
        user(state){
            return state.user
        }, 
        error(state){
            return state.error
        }
    },

    mutations: {
      SET_TOKEN (state, token){
          state.token = token
      },
      SET_USER (state, data){
          state.user = data
          localStorage.setItem('userData', JSON.stringify(state.user));
      },
      SET_ERROR (state, error){
          state.error = error
      }
    },
    actions: {
        async authSignin({ commit }, credrentials){
            let plate_no = credrentials.plateNumber
            let password = credrentials.password

            const BASE_ENDPOINT = "https://bpms.motormata.com/api/v1/auth/login?"
            const REQ_ENDPOINT = `${BASE_ENDPOINT}plate_no=${plate_no}&password=${password}`
            //send details to endpoint
            try{
                const res = await axios.post(REQ_ENDPOINT);
                if( res.status == 200 ){
                    router.push('/dashboard');
                    commit('SET_TOKEN', res.data.token)
                    commit('SET_USER', res.data)  
                } 

            } catch(err){
                console.log(err)
                this.error = err
            }            
        },



        
       async authUser({dispatch}, credrentials){
            let nameTest = /^[A-Za-z]+$/
            let phoneTest = /^\d{11}$/
            let plateTest = /^[a-zA-Z0-9]*$/
            let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            let passwordTest =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
            let name = nameTest.test(credrentials.fullName)
            let email= emailTest.test(credrentials.email)
            let plate = plateTest.test(credrentials.plateNumber)
            let phone = phoneTest.test(credrentials.mobileNumber)
            let pass = passwordTest.test(credrentials.password)


            if( name && email && plate && phone && pass == true){
                let name = credrentials.fullName
                let email= credrentials.email
                let plate_no = credrentials.plateNumber
                let phone_no = credrentials.mobileNumber
                let password = credrentials.password
    
                const BASE_ENDPOINT = "https://bpms.motormata.com/api/v1/auth/register?"
                const REQ_ENDPOINT = `${BASE_ENDPOINT}name=${name}&plate_no=${plate_no}&phone_no=${phone_no}&email=${email}&password=${password}`
                //send details to endpoint
                try{
                    const res = await axios.post(REQ_ENDPOINT);
                    if( res.status == 200){
                     dispatch('authSignin', credrentials);
                    }
                } catch (err){
                    commit('SET_ERROR', err)
                }    

            } else {
                commit('SET_ERROR', "Please check details entered")
            }
           
        }

    }
}
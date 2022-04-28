import axios from 'axios'
import router from '../router/index'

export default{
    namespaced: true,
    state:{
        token : null,
        user: null
     
    },
    mutations: {
      
    },
    actions: {
        async authSign(_, credrentials){
            let plate_no = credrentials.plateNumber
            let password = credrentials.password

            const BASE_ENDPOINT = "https://bpms.motormata.com/api/v1/auth/login?"
            const REQ_ENDPOINT = `${BASE_ENDPOINT}plate_no=${plate_no}&password=${password}`

            try{
                const res = await axios.post(REQ_ENDPOINT);
                if( res.status == 200 ){
                    router.push('/dashboard')
                    console.log(res.data)
                } else {
                    
                }
            } catch(err){
                console.log(err)
                this.error = err
            }            


        }
    }
}
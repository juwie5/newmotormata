<template>
  <div>
    <Navbar class="container-fluid"/>
    <section class="contain">
      <div>
        <h2>Schedule Packages</h2>
      </div>
      <div class="main-body">
        <div>
          <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Basic Service</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> 4 Hrs taken </p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>1000 Kms or 1 Month Warranty</li>
                    <li>Every 5000 Kms or 3 Months (Recommended)</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Engine Oil Replacement</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Oil Filter Replacement</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Air Filter Cleaning</p>
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Coolant Top up</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Wiper Fluid Cleaning</p>
                  <p class="icon" @click="toggleList()" v-show="!isActive"> +4 more View All</p>
                
                    <p v-show="isActive"><font-awesome-icon  class="icon" icon="check-circle"/> Battery Water Top up</p>
                    <p v-show="isActive"><font-awesome-icon  class="icon" icon="check-circle"/> Heater / Spark Plugs Checking</p>
                    <p v-show="isActive"><font-awesome-icon   class="icon" icon="check-circle"/> Car Wash</p>
                    <p v-show="isActive"><font-awesome-icon   class="icon" icon="check-circle"/> Interior  Vacumming (Carpet & Seats)</p>  
                </div>
                  <router-link  class="" to="#">CHOSE SERVICE</router-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Standard Service</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> 6 Hrs taken </p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>1000 Kms or 1 Month Warranty</li>
                    <li>Every 10,000 Kms or 6 Months (Recommended)</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Engine Oil Replacement</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Oil Filter Replacement</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Air Filter Cleaning</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Fuel Filter Cleaning</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Cabin Filter / Air Filter Cleaning</p>
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Coolant Top up (200 ml)</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Wiper Fluid Replacement</p>
                  <p class="icon" @click="toggleList1()" v-show="!isActive1"> +10 more View All</p>
                
                    <p v-show="isActive1"><font-awesome-icon  class="icon" icon="check-circle"/> Brake Fluid Top up (50 ml)</p>
                    <p v-show="isActive1"><font-awesome-icon  class="icon" icon="check-circle"/> Battery Water Top up</p>
                    <p v-show="isActive1"><font-awesome-icon  class="icon" icon="check-circle"/> Heater / Spark Plugs Checking</p>
                    <p v-show="isActive1"><font-awesome-icon   class="icon" icon="check-circle"/> Car Wash</p>
                    <p v-show="isActive1"><font-awesome-icon   class="icon" icon="check-circle"/> Interior  Vacumming (Carpet & Seats)</p>  
                    <p v-show="isActive1"><font-awesome-icon   class="icon" icon="check-circle"/> Scanning</p>  
                    <p v-show="isActive1"><font-awesome-icon   class="icon" icon="check-circle"/> Rear Brake Shoe Serviced</p>  
                    <p v-show="isActive1"><font-awesome-icon   class="icon" icon="check-circle"/> Front Brake Pads Serviced</p> 
                </div>
                  <router-link  class="" to="#">CHOSE SERVICE</router-link>
              </div>
            </div>
          </div>
        </div>
         <div>
          <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Comprehensive Service</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> 8 Hrs taken </p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>1000 Kms or 1 Month Warranty</li>
                    <li>Every 20,000 Kms or 12 Months (Recommended)</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Engine Oil Replacement</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Oil Filter Replacement</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Air Filter Cleaning</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Fuel Filter Cleaning</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Cabin Filter / Air Filter Cleaning</p>
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Coolant Top up (200 ml)</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Wiper Fluid Replacement</p>
                  <p class="icon" @click="toggleList2()" v-show="!isActive2"> +15 more View All</p>
                
                    <p v-show="isActive2"><font-awesome-icon  class="icon" icon="check-circle"/> Brake Fluid Top up (50 ml)</p>
                    <p v-show="isActive2"><font-awesome-icon  class="icon" icon="check-circle"/> Battery Water Top up</p>
                    <p v-show="isActive2"><font-awesome-icon  class="icon" icon="check-circle"/> Heater / Spark Plugs Checking</p>
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Car Wash</p>
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Interior  Vacumming (Carpet & Seats)</p>  
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Scanning</p>  
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Rear Brake Shoe Serviced</p>  
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Front Brake Pads Serviced</p>
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Wheel Balancing</p> 
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Wheel Alignment</p> 
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Trye Rotation</p> 
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Throttle Body Cleaning</p> 
                    <p v-show="isActive2"><font-awesome-icon   class="icon" icon="check-circle"/> Gear Oil Top up</p>   
                </div>
                  <router-link  class="" to="#">CHOSE SERVICE</router-link>
              </div>
            </div>
          </div>
        </div>

      </div> 
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'PeriodicServices',
  components:{
    Navbar,
    Footer
  },
  data: ()=> {
    return{
      isActive: false,
      isActive1: false,
      isActive2: false
    }
  },
  methods:{
    toggleList(){
        this.isActive = !this.isActive
        },
    toggleList1(){
      this.isActive1 = !this.isActive1
    },
    toggleList2(){
        this.isActive2 = !this.isActive2
    }


  }
}
</script>

<style scoped lang="scss">

@import '@/styles/services'

 
</style>

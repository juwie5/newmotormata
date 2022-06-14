<template>
  <div>
    <Navbar class="container-fluid"/>
    <section class="contain">  
      <div>
        <h2>Inspection</h2>
      </div>
      <div class="main-body">
        <div>
            <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Engine Scanning</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> Takes 3 hours</p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>Scanner Report Planning</li>
                    <li>OEM Scanner Used</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/>Electric Scanning</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Error Code Deletion</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Sensor Reset</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Inspection of Exhaust Smoke</p>
                </div>
                  
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
                <h3>Complete Suspension Inspection</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> Takes 4 hours</p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>25 Points Checklist</li>
                    <li>On Suspension Noise (Recommended)</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Front Shocker Check</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Rear Shocker Check</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Shocker Mount Check</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Link Rod Inspection</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Jump Rod Bush Inspection</p>
                </div>
               
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
                <h3>Car Fuild Check</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> Takes 3 hours</p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li> Free Pickup Included</li>
                    <li>On Leakage or Check Light ( Recommended )</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Brake Fluid Check</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Coolant Check</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Engine Oil Checkk</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/>Power Steering Oil Check</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Battery Water Inspection</p>
                </div>
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
  name: 'Autocare',
  components:{
    Navbar,
    Footer
  },
  data: () =>{
     return{
      isActive: false,
      isActive1: false
     }
  },
  methods:{
      toggleList(){
        this.isActive = !this.isActive
      },
      toggleList1(){
        this.isActive1 = !this.isActive1
      },
  }
}
</script>

<style lang="scss" scoped>

    @import '@/styles/services';

</style>
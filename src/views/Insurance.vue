<template>
  <div>
    <Navbar class="container-fluid"/>
    <section class="contain">
      <div>
        <h2 >Insurance Claim</h2>
      </div>
      <div class="main-body">
          <div>
            <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Insurance Claim</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> Cashless Facility</p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>Real Time Claim Tracking Mechanism</li>
                    <li>Free Pick-up/Drop</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Claim Intimation</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Surveyor Estimate Approval</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Co-ordination with Insurance Company</p>
                  <p><font-awesome-icon class="icon" icon="check-circle"/> 2 Years Warranty on Paint Jobs</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Policy Inspection</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Body Damage Inspection</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Insurance Claim Advice</p>
                </div>
                  <router-link  class="" to="#">CHOSE SERVICE</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="con-h2" >Know Your Policy</h2>
      </div>
        <div class="main-body">
          <div>
            <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Know Your Policy</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> Call Within 2 Hour</p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>Call Within 2 Hour</li>
                    <li>Regarding Doubts with Claim Initimation</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Complete Information abour your Policy</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Expenditure Assesment</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Suggestions on Purchase of New Policy</p>
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Connect with Insurance Agent</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Vehicle IDV and Premium Rate Suggestions</p>
                </div>
                  <router-link  class="" to="#">CHOSE SERVICE</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <h2 class="con-h2">Accidental Repairs</h2>
      </div>
       <div class="main-body">
          <div>
            <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Doorstep Accidental Inspection</h3>
                <div class="hrs">
                  <p><font-awesome-icon icon="clock"/> Takes 4 hours</p>
                </div>
              </div>
              <div>
                <div>
                  <ul class="main-ul">
                    <li>25 Points Checklist</li>
                    <li>Every 1 Month (Recommended)</li> 
                  </ul>
                </div>
                <div class="main-content">
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Body Damage Inspection</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> 25 Points Checklis</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Insurance Claim Advice</p>
                  <p><font-awesome-icon class="icon" icon="check-circle"/> Policy Inspectiont</p>
                  <p><font-awesome-icon  class="icon" icon="check-circle"/> Co-ordination with Insurance Company</p>
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
  name: 'Insurance',
  components: {
    Navbar,
    Footer
  },
  data: () => {
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

  @import '@/styles/services';

  .con-h2{
    margin-top: 15px;
  }



</style>
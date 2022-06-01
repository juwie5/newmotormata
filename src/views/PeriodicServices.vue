<template>
  <div>
    <Navbar class="container-fluid"/>
    <section class="contain">
      <div>
        <h2>Schedule Packages</h2>
      </div>
      <div class="main-body">
        <div >
          <div class="body">
            <div>
              <img class="carser" src="../assets/carservice.jpeg" alt="">
            </div>
            <div class="main">
              <div class="main-serv">
                <h3>Basic Service</h3>
                <div class="hrs">
                  <p><font-awesome-icon  icon="clock"/> 4 Hrs taken </p>
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
                  <router-link  class="" to="#">SELECT CAR</router-link>
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
      isActive: false
    }
  },
  methods:{
    toggleList(){
        this.isActive = !this.isActive
        }

  }
}
</script>

<style scoped lang="scss">

  .contain{
    padding: 2% 5% 0;
  }
  .main-body{
    padding:  20px 0 0 5px;
    border: .0625rem solid hsla(0,0%,60.8%,.2);
    width: 100%;
    max-width: 900px;
  }
  .carser {
    height: 10rem;
  }

  .body{
    display: flex;
    justify-content: space-around;
  }
  .main-serv{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
  .main{
    margin-left: 10px;
  }
  .main-ul{
    display: flex;

   li:nth-child(2){
     margin-left: 50px;
   }
  }

  .main-content{
        display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.125rem;
    grid-column-gap: 0.625rem;
  }

  .icon{
    color: #2abf41c4;
  }
  .hrs{
    background-color: #e5e7e9;
    padding: 10px 10px;

    p{
      margin: 0;
    }
  }
 @media only screen and (min-width: 320px) and (max-width: 430px) {
   .carser{
     display: none;
   }
 }

 
</style>

<template>
  <div>
    <section>
      <Navbar class="container-fluid"/>
      <section id="hero-video">
      

        <div class="hero-vid-caption">
          <h1 class="hero-vid-title">Maintenance & Repair</h1>
          <p class="hero-vid-paragraph">Periodic Services | A/C Repair | Body Repair | Custom Repair</p>
        </div>
      </section>
      <section id="maintenance-container">
    <div class="mc-whiteBox">
      <h1 class="mc-title">Maintenance & Repair</h1>
      <hr class="service-divider">
      <div class="row services-box">

        <div class="col-lg-6 mc-period-services">
          <span>Periodic Services</span>
          <button type="button" class="btn p-service-box-btn">Select Car <font-awesome-icon icon="plus"/></button>
          <font-awesome-icon icon="chevron-down" class="ps-select-car-drpdwn ac-drop" @click="toggleList()"/>
          <font-awesome-icon icon="chevron-up" class="ps-select-car-drop-up"/>   
        </div>

        <div class="col-lg-6 mc-ac-repair">
          <span>A/C Repair</span>
          <button class="btn ac-btn">Select Car <font-awesome-icon icon="plus"/></button>
          <font-awesome-icon icon="chevron-down" class="ps-select-car-drpdwn ac-drop"/>
          <font-awesome-icon icon="chevron-up" class="ps-select-car-drop-up"/> 
        </div>

        <div class="col-lg-6 mc-body-repair">
          <span>Body Repair</span>
          <button class="btn br-btn">Select Car <font-awesome-icon icon="plus"/></button>
          <font-awesome-icon icon="chevron-down" class="ps-select-car-drpdwn ac-drop"/>
          <font-awesome-icon icon="chevron-up" class="ps-select-car-drop-up"/>
        </div>

        <div class="col-lg-6 col-sm-12 mc-custom-repair">
          <span>Custom Repair</span>
          <button class="btn cr-btn">Select Car <font-awesome-icon icon="plus"/></button>
          <font-awesome-icon icon="chevron-down" class="ps-select-car-drpdwn ac-drop"/>
          <font-awesome-icon icon="chevron-up" class="ps-select-car-drop-up"/>
        </div>
      </div>
    </div>



    <!-- The Plan Service Modal -->
    <!-- Periodic Service -->
    <!-- Basic Service -->
    <div class="service-container">
      <div class="basic-service" v-bind:style='{"display" : (isActive? "block" : "none" )}'>
        <p class="bs-title"> <font-awesome-icon icon="angle-left" class="dire-icon"/> Basic Service <font-awesome-icon class="dire-icon" icon="angle-right"/> </p> 
        <hr class="service-divider">
        <ul>
          <li>1000 kms or 1 month Warranty</li>
          <li>Every 5000 kms or 3 months </li>
          <li>Engine oil replacement</li>
          <li>Air Filter replacement</li>
          <li>Wiper Fluid Replacement</li>
          <li>Heater / Spark Plugs Checking</li>
          <li>Interior Vacumming (Carpets & Seats)</li>
        </ul>
        <button class="btn">Add to cart</button>
      </div>

      <!-- Standard Service -->
      <div class="standard-service">
        <i class="fas fa-angle-left"></i>
        <p class="standard-service-title">Standard Service</p>
        <i class="fas fa-angle-right"></i>
        <hr class="service-divider">
        <ul>
          <li>1000 kms or 1 month Warranty</li>
          <li>Every 5000 kms or 3 months </li>
          <li>Engine oil replacement</li>
          <li>Air Filter replacement</li>
          <li>Wiper Fluid Replacement</li>
          <li>Heater / Spark Plugs Checking</li>
          <li>Interior Vacumming (Carpets & Seats)</li>
        </ul>
        <button class="btn">Add to cart</button>
      </div>
    </div>

    <!-- AC Service -->
    <!-- Basic Service -->
    <div class="ac-service-container">
      <div class="ac-basic-service">
        <i class="fas fa-angle-left"></i>
        <p class="abs-title">Basic Service</p>
        <i class="fas fa-angle-right"></i>
        <hr class="service-divider">
        <ul>
          <li>1000 kms or 1 month Warranty</li>
          <li>Every 5000 kms or 3 months </li>
          <li>Engine oil replacement</li>
          <li>Air Filter replacement</li>
          <li>Wiper Fluid Replacement</li>
          <li>Heater / Spark Plugs Checking</li>
          <li>Interior Vacumming (Carpets & Seats)</li>
        </ul>
        <button class="btn">Add to cart</button>
      </div>

      <!-- Standard Service -->
      <div class="ac-standard-service">
        <i class="fas fa-angle-left"></i>
        <p class="ac-standard-service-title">Standard Service</p>
        <i class="fas fa-angle-right"></i>
        <hr class="service-divider">
        <ul>
          <li>1000 kms or 1 month Warranty</li>
          <li>Every 5000 kms or 3 months </li>
          <li>Engine oil replacement</li>
          <li>Air Filter replacement</li>
          <li>Wiper Fluid Replacement</li>
          <li>Heater / Spark Plugs Checking</li>
          <li>Interior Vacumming (Carpets & Seats)</li>
        </ul>
        <button type="button" class="btn">Add to cart</button>
      </div>
    </div>


    <!-- Added to Cart response -->
    <div class="added-to-cart-container">
      <i class="far fa-check-circle"></i>
      <p class="atc-texts">Your items has been added to cart</p>
      <button class="btn atc-checkout-btn">Go to Cart</button>
      <button class="btn atc-back-btn">Back to Service Page</button>
    </div>
  </section>
      <Footer/>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Maintenance',
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
/********************************* Maintenance & Repair ***********************************/
#hero-video {
    background-color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#hero-video::after  {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    z-index: 2;
    top: 16.9%;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
}

#hero-video video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 16.9%;
    left: 0;
    z-index: 1;
    object-fit: cover;
}

.hero-vid-caption   {
    text-align: center;
    position: relative;
    color: #fff;
    z-index: 3;
}

.hero-vid-caption h1  {
    color: #fff;
    font-size: 3rem;
}


/* Services Section */
#maintenance-container  {
    background-color: #ebebeb;
    padding: 5% 7%;
}

.mc-whiteBox    {
    background-color: rgb(243, 243, 243);
    box-shadow: 1px 1px 20px 6px rgba(170, 170, 170, 0.2);
    padding: 10px 50px;
    border-radius: 5px;
}

.mc-title   {
    margin-top: 2rem;
}

.services-box   {
    width: 100%;
}
.service-divider{
  background-color: #53FF6E;
  width: 70px;
}

.mc-period-services, .mc-ac-repair, .mc-body-repair, .mc-custom-repair {
    border-bottom: 1px solid #9D9D9D;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    max-width: 40%;
    margin: 5% auto;
}

.mc-period-services span, .mc-ac-repair span, .mc-body-repair span, .mc-custom-repair span {
    margin: auto 0;
}

.ps-select-car-drpdwn, .ps-select-car-drop-up  {
    color: #9D9D9D;
    cursor: pointer;
    margin: auto 0;
}

.ps-select-car-drop-up  {
    display: none;
}

.p-service-box-btn:hover, .ac-btn:hover, .br-btn:hover, .cr-btn:hover {
    background-color: #97ffa6;
}

/* The Service Modal */
/* Periodic Service */
.service-container  {
    display: flex;
}

/* Basic Service & Standard Service */
.basic-service, .standard-service  {
    background-color: #fff;
    padding: 15px 30px;
    margin: 30px;
    border-radius: 5px;
    position: absolute;
    top: 45rem;
    left: 8rem;
    display: none;
    z-index: 2;
}

.basic-service .bs-title, .standard-service .standard-service-title {
   font-size: 1.3rem;
   margin-left: 0.7rem;
}

.basic-service i, .standard-service i {
    font-size: 1.3rem;
    position: absolute;
    top: 2.4rem;
    left: 25rem;
    cursor: pointer;
}

.basic-service i:first-child, .standard-service i:first-child   {
    position: absolute;
    top: 2.4rem;
    left: 2rem;
    cursor: pointer;
}

.basic-service hr.service-divider, .standard-service hr.service-divider   {
    position: relative;
    top: -0.5rem;
    left: 0.8rem;
}

.basic-service ul, .standard-service ul {
    margin-left: 1.7rem;
}

.basic-service ul li, .standard-service ul li  {
    padding: 10px;
}

.basic-service button.btn, .standard-service button.btn  {
    background-color: #53FF6E;
    margin: 1rem 0;
    padding: 10px 30px;
}

.basic-service button.btn:hover, .standard-service button.btn:hover  {
    background-color: #000;
    color: #fff;
}


/* AC Service */
/* Periodic Service */
.ac-service-container  {
    display: flex;
}

/* Basic Service & Standard Service */
.ac-basic-service, .ac-standard-service {
    background-color: #fff;
    padding: 30px 60px;
    margin: 50px;
    border-radius: 5px;
    position: absolute;
    top: 30rem;
    left: 41rem;
    display: none;
    z-index: 2;
}

.ac-basic-service .abs-title, .ac-standard-service .ac-standard-service-title {
   font-size: 1.3rem;
   margin-left: 0.7rem;
}

.ac-basic-service i, .ac-standard-service i {
    font-size: 1.3rem;
    position: absolute;
    top: 2.4rem;
    left: 25rem;
    cursor: pointer;
}

.ac-basic-service i:first-child, .ac-standard-service i:first-child   {
    position: absolute;
    top: 2.4rem;
    left: 2rem;
    cursor: pointer;
}

.ac-basic-service hr.service-divider, .ac-standard-service hr.service-divider   {
    position: relative;
    top: -0.5rem;
    left: 0.8rem;
}

.ac-basic-service ul, .ac-standard-service ul {
    margin-left: 1.7rem;
}

.ac-basic-service ul li, .ac-standard-service ul li  {
    padding: 10px;
}

.ac-basic-service button.btn, .ac-standard-service button.btn  {
    background-color: #53FF6E;
    margin: 1rem 0;
    padding: 10px 30px;
}

.ac-basic-service button.btn:hover, .ac-standard-service button.btn:hover  {
    background-color: #000;
    color: #fff;
}

/* Added to cart container */
.added-to-cart-container    {
    background-color: #fff;
    padding: 20px 50px;
    text-align: center;
    width: 40rem;
    margin: auto;
    position: absolute;
    top: 70rem;
    left: 20rem;
    border-radius: 5px;
    box-shadow: 10px 10px 80px rgb(211, 211, 211);
    display: none;
    z-index: 2;
}

.added-to-cart-container i  {
    font-size: 4rem;
    margin: 1rem 2rem;
    color: #53FF6E;
}

.added-to-cart-container p.atc-texts {
    font-size: 3rem;
}

.added-to-cart-container button {
    margin: 2rem 0.5rem 3rem;
}

.added-to-cart-container button.atc-checkout-btn {
    background-color: #000;
    color: #fff;
    padding: 10px 30px;
}

.added-to-cart-container button.atc-checkout-btn:hover {
    background-color: rgb(153, 153, 153);
    color: #fff;
    padding: 10px 30px;
}

.added-to-cart-container button.atc-back-btn {
    background-color: red;
    color: #fff;
    padding: 10px 30px;
}

.added-to-cart-container button.atc-back-btn:hover {
    background-color: rgb(100, 0, 0);
    color: #fff;
    padding: 10px 30px;
}
.active{
    display: block;
}
.dire-icon{
  font-size: 14px;
}


@media only screen and (min-width: 320px) and (max-width: 475px){
  .services-box{
    display: flex;
    flex-direction: column;
  }
  .mc-period-services, .mc-ac-repair, .mc-body-repair, .mc-custom-repair{
    max-width: 100%;
  }
  .basic-service{
    top: 35rem;
    left: 1rem;
  }
}
</style>

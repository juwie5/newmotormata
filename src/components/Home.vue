<template>
  <div class="main"> 
    <!-- Header -->
    <section class="container-fluid" id="header">
        <Navbar/>
        <div class="hero row">
          <div class="hero-texts col-lg-4 col-md-4">
            <h1 class="hero-title">
              <span class="drive-green">Drive with</span>
              <p class="txt-type">
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
              </p>
            </h1>
            <p class="hero-paragraph">Experience the best car services in Nigeria.</p>
          </div>
          <img class="col-lg-8 col-md-8 hero-illustration" src="../assets/Hero-illustration.png" alt="">

          <div class="reg-vehicle">
            <form ref="form" @submit.prevent="regUser()">
              <h1 class="reg-text">Tell us about your Car</h1>
            <font-awesome-icon icon="car" class="hero-car-icon"/>
            <input type="text" placeholder="Plate number" v-model="form.plateNo" maxlength="8" required>
            <font-awesome-icon icon="phone-alt" class="hero-call-icon"/>
            <input type="tel" placeholder="Mobile number" v-model="form.phoneNo" maxlength="11" required>
            <button  class="btn reg-veh-btn">Get Started</button>
            <h1 v-if="base" class="join-us">Join our 30,000+ Happy Customers</h1>
            <h1  v-else class="join-us green">Thank you for Joining us</h1>
            <h1 class="join-us red">{{error}}</h1>
            </form>
          </div>

        </div>
      <img class="hero-left-grn-circle" src="../assets/Left-circle.png" alt="">

    </section> 

    <HomeSubSectionOne/>
    <HomeSubSectionTwo/>
    <!-- FAQs -->
    <section id="faqs" ref="faq">
      <h1 class="faq-title">FAQs</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
              <!--Firstcard -->
            <div class="accordion-item" id="headingOne">
              <h5 class="accordion-header" id="flush-headingOne">
                <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <span>Can I have my car serviced at the comfort of my home?</span>
                </button>
              </h5>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <div class="card-body">
                  <span class="answer">Yes. Motormata will send a certified technician to your doorstep for routine maintenance services and repair.</span>
                </div>
            </div>
          </div>
          </div>
            <!--Secondcard -->
          <div class="accordion-item" id="headingTwo">
          <h5 class="accordion-header" id="flush-headingTwo">
            <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <span>How often should i get my car serviced?</span>
            </button>
          </h5>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="card-body">
                  <span class="answer">Every 3 months or 5,000km, whichever comes first.</span>
                </div>
            </div>   
          </div>
        </div>
        <!-- <-- Thirdcard -->
        <div class="accordion-item" id="headingThree">
          <h5 class="accordion-header" id="flush-headingThree">
            <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <span>Is inspection important?</span>
            </button>
          </h5>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="card-body">
                  <span class="answer">Yes, inspection is important. It helps us identify the cause of your car issues so that we can recommended the most appropriate fix. Inspection comprises of complete car health check-up followed by submission of an inspection report on the status of the vehicle. Post evaluation of your car condition, 
                    the technician will advice a course of action for the same.</span>
                </div>
            </div>  
          </div>
        </div>
        <!-- <-- Fouthcard -->
        <div class="accordion-item" id="headingFour">
          <h5 class="accordion-header" id="flush-headingFour">
            <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              <span>What type of engine oil will you use?</span>
            </button>
          </h5>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="card-body">
                  <span class="answer">We use manufacturer recommended engine oil be it Synthetic, Semi-Synthetic or None Synthetic engine oil.</span>
                </div>
              </div>
          </div>
        </div>
        <!-- <-- Fithcard --> 
        <div class="accordion-item" id="headingFive">
          <h5 class="accordion-header" id="flush-headingFive">
            <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              <span>Do i need to do routine maintenance?</span>
            </button>
          </h5>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="card-body">
                  <span class="answer">Yes. Regular routine maintenance will reduce the need for expensive repairs and extend the lifespan of your car.</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <-- Sixthcard --> 
        <div class="accordion-item" id="headingSix">
          <h5 class="accordion-header" id="flush-headingSix">
            <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              <span>How do i renew my vehicle papers?</span>
            </button>
          </h5>
          <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="card-body">
                  <span class="answer">By simply telling us your plate/registration number and phone number.</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <-- Seventhcard --> 
        <div class="accordion-item" id="headingSeven">
          <h5 class="accordion-header" id="flush-headingSeven">
            <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
              <span>Can Motormata inspect a car that I want to buy?</span>
            </button>
          </h5>
          <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="card-body">
                  <span class="answer">Yes, we offer Pre-Purchase Inspection as a service.</span>
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
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
import { setTimeout } from 'timers'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import HomeSubSectionOne from './HomeSubSectionOne.vue'
import HomeSubSectionTwo from './HomeSubSectionTwo.vue'

export default {
  name: 'Home',
  components:{
    Navbar,
    Footer,
    HomeSubSectionOne,
    HomeSubSectionTwo
},
  data: () =>{
    return{
      typeValue: '',
      typeStatus:  false,
      typeArray : ['Confidence','Safety','Assurance'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      form:{
        plateNo: '',
        phoneNo: ''
      },
      base: true,
      error: ''
      }
  }, 
  methods: {
    //Typewriter function
    typeText(){
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
         
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
    }, 
    //Erase function
    eraseText(){
       if(this.charIndex > 0) {
          if(!this.typeStatus)
          this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }, 
      // Register User 
         async regUser(){
          let phoneTest = /^\d{11}$/
          let plateTest = /^[a-zA-Z0-9]*$/
          let plate = plateTest.test(this.form.plateNo)
          let phone = phoneTest.test(this.form.phoneNo)
          
          //validate user input
          if(plate && phone == true){
            
            let plate_no = this.form.plateNo
            let phone_no = this.form.phoneNo
            const BASE_ENDPOINT = "https://bpms.motormata.com/api/v3/registration?"
            const REQ_ENDPOINT = `${BASE_ENDPOINT}plate_no=${plate_no}&phone_no=${phone_no}`
                //send details to endpoint
              try{
              const res = await axios.post(REQ_ENDPOINT);
              if( res.status == 200){
                  this.base = false
              }  
              } catch (err){
                console.log(err)
                this.error = "Please check details entered"
                console.log(this.error)
              }// reset form 
              setTimeout(() => {
                this.base = true
                this.form.plateNo = ''
                this.form.phoneNo = ''
              }, "5000")      
          } else {
            this.error = "Please check details entered"
          }     
    },
  },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },
    //  mounted(){
    //      VueScrollTo.scrollTo(this.$refs.faq, 1000, { easing: 'linear' })
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .accordion-button:not(.collapsed) {
        color: #fff;
        background-color: none;
 }

</style>

<style scoped lang="scss">
.reg-vehicle{
    background-color: #fff;
    width: 374px;
    display: block;
    text-align: center;
    padding: 20px;
    position: absolute;
    top: 27rem;
    left: 6rem;
    border-radius: 3px;
    box-shadow: 1px 1px 10px rgb(179, 179, 179);
    z-index: 1;
}

.reg-text   {
    font-size: 24px;
    margin: 3% 0 10%;
}

.reg-vehicle input{
    display: block;
    margin: 5% auto;
    width: 327px;
    padding: 10px 20px 10px 45px;
    border-radius: 3px;
    border: 1px solid #9D9D9D;
}

.green{
  color: #53FF6E;
}

.red{
  color: #FF0000,
}

  
.hero-car-icon  {
    position: absolute;
    top: 104px;
    left: 42px;
    color: #9D9D9D;
    font-size: 18px;
}

.hero-call-icon {
    position: absolute;
    top: 168px;
    left: 42px;
    color: #9D9D9D;
    font-size: 18px;
}

.reg-veh-btn   {
    background-color: #008937;
    color: #fff;
    width: 327px;
    margin: 2%;
    padding: 10px;
    border-radius: 3px;
}

.container-fluid    {
    padding: 2% 5% 0;
}

/* Hero */
.hero   {
    padding: 5% 1.3% 2%;
}

.drive-green {
    color: #008937;
    font-size: 38px;
    font-weight: 400;
}

.hero-title   {
    color: #000;
    font-size: 62px;
    font-weight: 500;
}

.hero-paragraph {
    font-size: 24px;
    color: #8C8C8C;
}

/* animation cursor */
.txt-type > .cursor {
    display: inline-block;
    margin-left: 1px;
    width: 1px;
    background-color: #2c2c2c;
    animation: cursorBlink 1s infinite;
}

.txt-type >.cursor.typing{
  animation: none;
}

@keyframes cursorBlink  {
  49% {background-color: #2c2c2c;}
  50% {background-color: transparent;}
  99% {background-color: transparent;}
  
}

img.hero-illustration   {
    max-width: 55%;
    position: relative;
    left: 120px;
    top: -20px;
}

/* register your vehicle container */
h1.join-us  {
    font-size: 24px;
    margin: 6%;
}

.hero-left-grn-circle    {
    position: absolute;
    top: 40rem;
    left: -7rem;
}
  /* FAQs */
  #faqs {
      padding: 5% 7%;
      background-image: url('../assets/faq-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
  }

  #faqs img {
      position: absolute;
      top: 200px;
      left: -10px;
      z-index: 2;
  }

  .faq-title    {
      margin: 0 0 5%;
  }


.accordion-button:not(.collapsed) {
        background-color: transparent !important;
}
  
  .accordion-body{
      background-color: #f0f0f0;
  }

  #headingOne, #headingTwo, #headingThree, #headingFour, #headingFive, #headingSix, #headingSeven   {
      background-color: #f0f0f0;
  }

  .faq-btn{
      background-color: #f0f0f0;
  }

  .faq-drop-btn{
      float: right;
      cursor: pointer;
      margin-top: 10px;
      font-size: 14px;
  }

  #accordion .card .card-header h5 .btn-link {
    color: #000;
  }

  #accordion .card .card-header h5 .btn-link:hover {
    text-decoration: none;
  }

  .btn-link{
    text-decoration: none;
  }

  .card-body{
    padding: 0;
  }

@media only screen and (min-width: 768px) and (max-width:1024px){
.maintenance-title, .autocare-title, .insurance-title {
    font-size: 18px;
}
.hero-illustration{
  display: none;
}
.reg-vehicle{
  left: 48%;
  top: 6rem;
}
.hero-title{
  font-size: 52px;
}
}

/* 430px display width */
@media (max-width: 430px) {
    .main {
         margin: 0;
         padding: 0;
        text-align: center;
    }
    /* nav */
 
    /* Hero */
    .drive-green {
        font-size: 35px;
    }
    .hero-title {
        font-size: 48px;
    }
    img.hero-illustration {
        display: none;
    }
    .reg-vehicle {
        position: unset;
        margin: 1% auto 15%;
        width: 320px;
    }
    .reg-text {
        font-size: 20px;
    }
    .reg-vehicle input {
        font-size: 12px;
        width: 250px;
        padding: 10px 10px 10px 40px;
    }
    .hero-car-icon {
        top: 401px;
        left: 98px;
        font-size: 14px;
    }
    .hero-call-icon {
        top: 456px;
        left: 98px;
        font-size: 13px;
    }
    .reg-veh-btn {
        width: 250px;
        padding: 10px;
        font-size: 13px;
    }
    h1.join-us {
        font-size: 15px;
    }

    /* Benefits */
    #benefits {
        padding: 3% 10% 4%;
    }
    .benefit-title{
      font-size: 30px;
    }

  
    /* Number section */
    .num-sect{
      flex-direction: column;
    }
    
    .num-sect  div{
      margin-bottom: 10px;
    }

    /* Subscribe */
    #subscription {
        padding: 10% 7%;
        text-align: center;
    }
    .subscription-title {
        font-size: 2rem;
        text-align: center;
        padding: 0;
    }

    /* Technicians */
    .technician-title {
        text-align: center;
        font-size: 30px;
    }
    
  
    /* FAQs */
    #faqs {
        text-align: left;
    }
    .faq-title {
        font-size: 30px;
        padding-top: 40px;
    }
    .faq-drop-btn1, .faq-drop-btn2, .faq-drop-btn3, .faq-drop-btn4, .faq-drop-btn5 {
        font-size: 0.7rem;
        position: relative;
        top: 0.2rem;
    }
    #headingOne, #headingTwo, #headingThree, #headingFour, #headingFive {
        padding: 0.5rem 0;
    }
    h5 span {
        font-size: 0.7rem;
    }
    .answer {
        font-size: 0.7rem;
    }
}

@media (max-width: 375px){

.hero-car-icon {
  top: 325px; 
  left: 70px;
}

.hero-call-icon {
    top: 380px;
    left: 70px;
    font-size: 13px;
}
.drive-green{
  font-size: 24px;
}
.review-text{
  font-size: 12px;
  width: 205px;
  left: 108px;
}
.hero-title{
  font-size: 38px;
}
.hero-paragraph{
  font-size: 16px;
}

.assurance-title, .hw-we-wrk-title{
    font-size: 28px;
}
.sec-img{
  left: -23%;
}
.sec-text{
  left: 0;
}
.motormata-assurance li{
  font-size: 20px;
}
.tech-img{
      width: 200px;
      height: 130px;
    }

}

@media (max-width: 320px){
  .hero-car-icon {
  top: 343px; 
  left: 2.8rem;
}

.hero-call-icon {
    top: 398px;
    left: 2.8rem;
}

.assurance-title, .hw-we-wrk-title{
    font-size: 28px;
}

.motormata-assurance li{
  font-size: 20px;
}

.abstract-image img {
    max-width: 270px;
    margin: auto;
    text-align: center;
}

#how-we-work ol{
  margin: 0;
}
.tech-img{
      width: 160px;
      height: 110px;
    }

}


@media only screen and (min-width: 426px) and (max-width: 767px){
 .hero-illustration{
  display: none;
 }
 .reg-vehicle{
  position: unset;
  margin: 1% auto 15%;
 }
 .hero-car-icon{
  left: 30%;
  top: 435px;
 }
 .hero-call-icon{
  left: 30%;
  top: 497px;
 }
}



</style>

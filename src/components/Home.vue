<template>
<div> 
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
           <h1 class="red">{{error}}</h1>
          </form>
        </div>

      </div>
    <img class="hero-left-grn-circle" src="../assets/Left-circle.png" alt="">

  </section>

  <!-- Services section -->
  <section id="services">
    <div class="services">
      <div class="why-sers">
          <h4 class="drive-green">Why Use Motormata?</h4>
          <div class="sect-sers">
          <p class="sers-txt">Motormata helps car owners drive with confidence. </p>
          <p class="sers-txt" > We leverage technology to track critical components </p> 
          <p class="sers-txt"> of your vehicle and connect you to vetted mobile mechanics or workshops.</p>  
          <p class="sers-txt"> </p>
          </div>
          
          <!-- <ul class="why-ul">
            <h3>With the option to allow you </h3>
            <li>Repair/Buy Now Pay Later</li>
            <li>Access to Vetted Mechanics</li>
            <li>Genuine Spare Parts</li>
            <li>Transparent Pricing</li>
          </ul> -->
      </div>
      <div class="cards-set">
        <div class="cards">
          <img src="../assets/micn-b.svg" alt="">
          <h3 class="cards-h3">Repair now/Pay Later</h3>
        </div>
        <div class="cards">
          <img src="../assets/micn-c.svg" alt="">
          <h3 class="cards-h3" >Mobile maintenance</h3>
        </div>
        <div class="cards">
          <img src="../assets/micn-a.svg" alt="">
          <h3 class="cards-h3">Vehicle papers</h3>
        </div>

      </div>
    </div>
  </section>

  <!-- Motormata Assurance -->
  <section id="assurance">
    <div class="motormata-assurance">
      <h1 class="assurance-title">Mobile Car Services at your convenience</h1>
      <hr class="service-divider">
      <div class="assurance">
        <ul>
          <li>Unparelled convenience</li>
          <li>One-on-one service</li>
          <li>Affordable pricing</li>
          <li>Fast and efficient service</li>
          <li>Easy scheduling</li>
          <li>Quality work</li>         
        </ul>
        <img src="../assets/assuranceCar.png" alt="asuurance-car" class="assure-img">
      </div>
     
    </div>
  </section>

  <!-- How We work -->
  <section id="how-we-work">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 abstract-image">
        <img src="../assets/howWeWork.png" alt="">
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 how-we-work-texts">
        <h1 class="col-lg-6 hw-we-wrk-title">How we work</h1>
        <hr class="service-divider">
        <ol>
          <li class="ordered-list">Choose your preferred service
            <ul>
              <li>Option to Repair/Buy Now Pay Later or pay in full at once.</li>
            </ul>
          </li>
          <li class="ordered-list">Schedule Service
            <ul>
              <li>We offer mobile services, drive in workshops and delivery. </li>
            </ul>
          </li>
          <li class="ordered-list">Track Your Car Service in Real-Time
            <ul>
              <li>Get timely updates and pictures as work progresses on your car.</li>
            </ul>
          </li>
          <li class="ordered-list">Tell everyone about Motormata and be rewarded.
            <ul>
              <li>Get upto 10% discount for every successful referral.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <!-- Reviews -->
  <section id="reviews">
    <h1 class="review-title">Reviews</h1>
    <hr class="service-divider">
    <div id="review-carousel" class="carousel slide" data-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-lg-5 first">
              <img class="review-image" src="../assets/angel-reviewer.png" alt="reviewer-profile">
              <span class="review-text">“I enjoyed using Motormata, they help me manage my car very well and I really
                appreciate them for all they’ve done.” </span>
              <p class="reviewer-name">Obinna Anapusim</p>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-5 the-guy second">
              <img class="review-image sec-img" src="../assets/lekan-reviewer.png" alt="reviewer-profile">
              <span class="review-text sec-text">“I enjoyed using Motormata, they help me manage my car very well and I
                really appreciate them for all they’ve done.” </span>
              <p class="reviewer-name2"> Olajide Ogunleye</p>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row">
            <div class="col-lg-5 the-lady first">
              <img class="review-image" src="../assets/angel-reviewer.png" alt="reviewer-profile">
              <span class="review-text">“I enjoyed using Motormata, they help me manage my car very well and I really
                appreciate them for all they’ve done.” </span>
              <p class="reviewer-name">Angel Baruwa</p>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-5 second">
              <img class="review-image sec-img" src="../assets/lekan-reviewer.png" alt="reviewer-profile">
              <span class="review-text sec-text">“I enjoyed using Motormata, they help me manage my car very well and I
                really
                appreciate them for all they’ve done.” </span>
              <p class="reviewer-name2">Lekan Baruwa</p>
            </div>
          </div>
        </div>


      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#review-carousel" data-bs-slide="prev">
        <font-awesome-icon class="carousel-control-prev-icon" icon="chevron-left"/>
      </button>
      <button class="carousel-control-next"  type="button" data-bs-target="#review-carousel" data-bs-slide="next">
         <font-awesome-icon class="carousel-control-next-icon" icon="chevron-right"/>
      </button>
    </div>
  </section>

  <!-- Motormata Benefits -->
  <section id="benefits">
    <h1 class="benefit-title">Motormata Benefits</h1>
    <hr class="service-divider">

    <div class="row">

      <div class="col-lg-6 col-md-12 col-sm-12 convinience">
        <font-awesome-icon icon="thumbs-up" class="icon"/>
        <h4 class="convinience-title">Convinience</h4>
        <p class="convinience-paragraph">Doorstep service, Free pickup and dropoff. You don’t need to visit the workshop
          if not necessary.</p>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 affordable">
        <font-awesome-icon icon="coins" class="t-icon"/>
        <h4 class="affordable-title">Affordable</h4>
        <p class="affordable-paragraph">Pocket friendly sevices with no compromise on service delivery.</p>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 transparent">
        <font-awesome-icon icon="binoculars" class="icon"/>
        <h4 class="transparent-title">Transparent</h4>
        <p class="convinience-paragraph">Our prices are fair and competitive current market prices, and we make sure that you are getting the
            best prices possible on our products and services.</p>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 quality">
        <font-awesome-icon icon="award" class="t-icon"/>
        <h4 class="quality-title">Quality</h4>
        <p class="convinience-paragraph">We offer premium products and provide you with premium services, right at your doorstep for your
            convenience.</p>
      </div>
    </div>
  </section>

  <!-- Numbers section -->
  <section id="numbers">
    <div class="row">
      <font-awesome-icon icon="solid users-gear" />
      <p class="col-lg-4 col-md-6 col-sm-6 service-number"><strong>50,000+</strong> Services rendered</p>
      <p class="col-lg-4 col-md-6 col-sm-6 customers-number"><strong>20,000+</strong> Happy Customers</p>
      <p class="col-lg-4 col-md-6 col-sm-6 rating-number"><strong>4.8 </strong>Ratings</p>
    </div>
  </section>

  <!-- Download Section -->
  <section id="download">
    <div class="row">
      <div class="col-lg-7 app-download">
        <h1 class="download-title">App Coming soon</h1>
        <img class="googlePlay" src="../assets/google-badge.png" alt="googleplay">
        <img class="appStore" src="../assets/appstore-badge.png" alt="appstore">
      </div>
      <div class="col-lg-5 screenshot">
        <img src="../assets/screen-shot.png" alt="App mockup">
      </div>
    </div>
  </section>

  <!-- Top technicians -->
  <section id="technicians">
    <h1 class="technician-title">Top Technicians</h1>
    <hr class="service-divider">

    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 first-tech">
        <img class="tech-img" src="../assets/mike.jpg" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Mike</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star-half-alt" class="star"/>
          <p class="experience">5 years Experience</p>
        </div>

      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 first-tech">
        <img class="tech-img" src="../assets/waris.jpg" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Waris</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <p class="experience">1 year Experience</p>
        </div>

      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 first-tech">
        <img class="tech-img" src="../assets/samson.jpg" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Samson</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star-half-alt" class="star"/>
          <p class="experience">4 years Experience</p>
        </div>

      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 first-tech">
        <img src="../assets/technician.png" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Tobi</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star-half-alt" class="star"/>
          <p class="experience">3 years Experience</p>
        </div>

      </div>
    </div>
  </section>

  <hr class="section-divider">

  <!-- Subscription section -->
  <section id="subscription">
    <h1 class="subscription-title">Subscribe to our newsletter</h1>
    <input type="email" name="subscribe" id="sub" placeholder="Enter your email">
    <button type="submit" class="btn subscribe-btn">Subscribe</button>
  </section>

  <!-- FAQs -->
  <section id="faqs">
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
import { setTimeout } from 'timers'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components:{
    Navbar,
    Footer
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
          let phoneTest= /^\d{11}$/
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
    }
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

/* Services */
#services   {
    position: relative;
    background-color: #ebebeb;
    padding: 8% 3%;
}
.services{
  display: flex;
    justify-content: space-between;
    padding: 5% 7%;
    align-items: center;
}

.why-sers{
  padding: 10px;
  text-align: left;

}

.why-heading{
   font-size: 24px;
   color: #008937;
   font-weight: 600;
   margin-bottom: 25px;
}

.why-h2{
  font-size: 38px;
  margin: 15px 0;
  margin-bottom: 30px;
   font-weight: 600;
   line-height: 1.2em;
}

.sers-txt{
  font-size: 22px;
  font-weight: 500;
}

.why-ul{
  padding: 0;
}
.cards-set{
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 10px;
}

.cards{
  background-color: #fff;
  text-align: center;
  border-radius: 3px;
}

.cards-h3{
  font-size: 16px;
}

.services li {
    margin-left: 20px;
    font-size: 22px;
    padding: 10px;
}

.service-divider {
    background-color: #53FF6E;
    width: 70px;
    margin: 0;
    opacity: 0.8;
}


/* Assurance */
.motormata-assurance    {
    background-image: url('../assets/assurance-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5% 7%;
}

.assurance{
  display: flex;
  justify-content: space-between;
}

.motormata-assurance ul {
    margin: 40px 0;
}

.motormata-assurance li {
    padding: 10px 5px;
    margin: 0 20px;
    font-size: 24px;
    list-style: none;
}

.motormata-assurance li::before {
   color: #53FF6E;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }

  .assurance-readmore-btn   {
      background-color: transparent;
      border: 1px solid #000;
      padding: 10px 30px;
  }

  .hidden-element   {
      display: none;
  }


  /* How we work section */
  #how-we-work  {
      padding: 5% 7%;
      background-color: #ebebeb;
  }

  .abstract-image   {
    position: relative;
    right: 100px;
  }

  #how-we-work ol{
    margin: 10px 10px;    
  }

  #how-we-work .ordered-list{
    padding: 10px 5px;
    font-size: 18px;  
  }

  .how-we-work-texts    {
      margin-top: 2%;
  }

  .hw-we-wrk-title  {
      max-width: 100%;
      padding: 0;
  }

  .ordered-list li{
      margin: 0 10px;
      font-size: 14px;
      list-style-type: disc;
      color: #9D9D9D;
  }


  /* Review Section */
  #reviews  {
      padding: 5% 5%;
  }

  #review-carousel  {
      padding: 5% 4%;
  }

  .carousel {
      padding: 5% 0;
  }

  .carousel-inner   {
    padding: 5% 0;
}

  .carousel-control-prev-icon {
      color: #000;
      position: absolute;
      left: 10px;
  }

  .carousel-control-next-icon   {
    color: #000;
    position: absolute;
    right: -6px;
  }

  .review-text  {
      display: block;
      font-size: 13px;
      position: relative;
      left: 130px;
      bottom: 16px;
      max-width: 350px;
  }

  .sec-text {
      position: relative;
      left: 1rem;
  }

  .review-image {
      position: absolute;
      bottom: 0;
  }

  .sec-img  {
      position: absolute;
      left: 50%;
  }

  .reviewer-name    {
      position: relative;
      left: 130px;
      font-size: 15px;
      color: #008937;
      font-weight: 700;
  }

  .reviewer-name2   {
    position: relative;
    left: 20px;
    font-size: 15px;
    color: #008937;
    font-weight: 700;
  }


  /* Benefits */
  #benefits {
      padding: 3% 7% 4%;
      background-image: url('../assets/benefit-bg.png');
      background-repeat: no-repeat;
      background-size: cover;
  }

  .benefit-title    {
    color: #03471E;
    font-size: 48px;
    margin: 5% 0 1%;
  }

  .icon {
      position: absolute;
      margin-top: 5px;
      left: 10%;
  }
  .t-icon{
    position: absolute;
    margin-top: 5px;
    left: 45%;
  }

  .convinience, .affordable, .transparent, .quality  {
      margin: 5% 5% 0;
      max-width: 30%;
  }

  .convinience-paragraph, .affordable-paragraph, .transparent-paragraph, .quality-paragraph {
      font-size: 14px;
      color: #6D6D6D;
  }

  /* numbers */ 
  #numbers {
      padding: 5% 7%;
      text-align: center;
  }

  /* App download */
  #download {
      padding: 5% 7%;
      background-color: #ebebeb;
  }

  .app-download {
      margin-top: 15%;
  }

  /* Technicians */

  #technicians  {
      padding: 5% 7%;
      text-align: center;
  }

  .technician-title {
      font-size: 48px;
      text-align: left;
  }

  .first-tech   {
      margin-top: 8%;
  }

  .first-tech img{
      max-width: 40%;
      margin-right: 5%;
      position: relative;
      top: -30px;
  }
  .tech-img{
     border-radius: 50%;
     width:216px; 
     height: 222px;
     object-fit: cover;
  }

  .staff-content    {
    display: inline-block;
    text-align: left;
  }

  .star{
      color: #FFC909;
  }

  .section-divider  {
      background-color: #000;
      width: 90%;
      margin: auto;
  }


  /* Subscription */
  #subscription {
      padding: 5% 7%;
      text-align: center;
  }

  .subscription-title   {
      font-size: 48px;
      text-align: left;
      padding-left: 50px;
  }

  #subscription input {
      width: 60%;
      padding: 15px 25px;
      margin: 5% 0;
  }

  .subscribe-btn    {
      width: 30%;
      padding: 10px 10px;
      background-color: #000;
      color: #fff;
      font-size: 1.5rem;
      margin-left: 5px;
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

  #accordion .card {
      background-color: transparent;
      border: none;
      box-shadow: none;
  }
  .accordion-body{
      background-color: #f0f0f0;
  }

 

  #headingOne, #headingTwo, #headingThree, #headingFour, #headingFive   {
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

 
/* 430px display width */
@media (max-width: 430px) {
    body {
        text-align: center;
    }
    /* nav */
    .openNavBtn {
        left: 22rem;
        z-index: 3;
    }
    #sideNav {
        width: 80%;
    }
    .signin-side-navBtn {
        left: 5rem;
    }
    .signup-side-navBtn {
        top: 3.5rem;
        left: -5.2rem;
    }
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
        top: 386px;
        left: 98px;
        font-size: 14px;
    }
    .hero-call-icon {
        top: 440px;
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
    /* Services */
    .services{
      flex-direction: column;
    }
    .cards-set{
      display: inline-block;
    }

    #services li {
        text-align: left;
        font-size: 16px;
        padding-left: 1.5rem;
    }
    .periodic-check-icon {
        left: 6rem;
        top: 10.5%;
    }
      .service-divider {
        margin: 5% auto 10%;
        background-color: #53FF6E;
        width: 70px;
    }
    /* Assurance */
    .assurance-title {
        padding-top: 10%;
        font-size: 30px;
    }

    .assure-img{
      display: none;
    }
    .download-title {
        font-size: 30px;
        padding: 5%;
    }
    img.googlePlay {
        max-width: 130px;
    }
    img.appStore {
        max-width: 110px;
    }
    .app-download {
      margin: 0;
  }
    .screenshot{
      display: none;
    }
    /* How we work */
     .hw-we-wrk-title{
      font-size: 30px;
    }

    .abstract-image {
        position: unset;
        margin: auto 0;
        padding: 5%;
    }
    .abstract-image img {
        max-width: 330px;
    }
   
    #how-we-work .ordered-list{
      text-align: center;
      font-size: 14px;
    }
     .ordered-list li{
        font-size: 12px;
        margin: 0;
      }
    /* Reviews */
    .review-text {
        text-align: left;
        width: 220px;
        top: 10px;
        left: 120px;
    }
    .sec-text {
        left: 1.8rem;
    }
 
    .reviewer-name {
        position: relative;
        top: 20%;
        left: -0.8rem;
    }
    .review-image{
      left: 20px;
      top: 10px;

    }
    .sec-img{
      left: -17%;
    }
    .reviewer-name2 {
        position: relative;
        top: 20%;
        left: -6.2rem;
    }
    /* Benefits */
    #benefits {
        padding: 3% 10% 4%;
    }
    .benefit-title{
      font-size: 30px;
    }
    .icon{
      left: 31%;
    }
    .c-icon {
        position: absolute;
        left: 55px;
        top: 5.6px;
        font-size: 18px;
    }
    .a-icon {
        position: absolute;
        left: 58px;
        top: 5.6px;
        font-size: 18px;
    }
    .t-icon {
        position: absolute;
        left: 30%;
        font-size: 18px;
    }
    .q-icon {
        position: absolute;
        left: 85px;
        top: 7px;
        font-size: 18px;
    }
    .convinience, .affordable, .transparent, .quality {
        margin: 2% 5% 0;
        max-width: 100%;
        text-align: center;
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
    #subscription input {
        width: 50%;
        padding: 5px 10px;
        outline: none;
    }
    .subscribe-btn {
        width: 40%;
        padding: 5px 10px;
        font-size: 1.2rem;
    }
    /* Technicians */
    .technician-title {
        text-align: center;
        font-size: 30px;
    }
    
    .tech-img{
      width: 200px;
      height: 150px;
    }
    .staff-name {
        font-size: 15px;
        position: relative;
        top: 0.4rem;
    }
    .experience {
        font-size: 13px;
    }
    .staff-content i {
        font-size: 10px;
        position: relative;
        top: -0.2rem;
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
  top: 310px; 
  left: 70px;
}

.hero-call-icon {
    top: 365px;
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
  top: 325px; 
  left: 2.8rem;
}

.hero-call-icon {
    top: 378px;
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

@media only screen and (min-width: 325px) and (max-width: 360px){
    .hero-car-icon {
  top: 333px; 
  left: 4.5rem;
}

.hero-call-icon {
    top: 387px;
    left: 4.5rem;
}
}

@media (max-width: 1024px){
.maintenance-title, .autocare-title, .insurance-title {
    font-size: 18px;
}


}

</style>

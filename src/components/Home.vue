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
          <h1 class="reg-text">Register your Vehicle</h1>
          <font-awesome-icon icon="car" class="hero-car-icon"/>
          <input type="number" placeholder="Plate number">
          <font-awesome-icon icon="phone-alt" class="hero-call-icon"/>
          <input type="tel" placeholder="Mobile number">
          <button class="btn reg-veh-btn">Get Started</button>
          <h1 class="join-us">Join our 30,000+ Happy Customers</h1>
        </div>

      </div>
    <img class="hero-left-grn-circle" src="../assets/Left-circle.png" alt="">

  </section>

  <!-- Services section -->
  <section id="services">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 maintenance">
        <router-link to="/maintenance">
          <div class="maintenance-container">
            <h1 class="maintenance-title">Maintenance & Repair</h1>
            <hr class="service-divider">
            <ul>
              <font-awesome-icon class="periodic-check-icon" icon="check"/>
              <li>Periodic Services</li>
              <font-awesome-icon class="ac-check-icon" icon="check"/>
              <li>A/C Repair</li>
               <font-awesome-icon class="repair-check-icon" icon="check"/>
              <li>Body Repair</li>
              <font-awesome-icon class="crepair-check-icon" icon="check"/>
              <li>Custom Repair</li>
            </ul>
          </div>
        </router-link>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 autocare">
        <router-link to="/autocare">
          <div class="autocare-container">
            <h1 class="autocare-title">Auto Care Products & Parts</h1>
            <hr class="service-divider">
            <ul>
              <font-awesome-icon class="periodic-check-icon" icon="check"/>
              <li>Auto care Products</li>
              <font-awesome-icon class="ac-check-icon" icon="check"/>
              <li>Battery</li>
              <font-awesome-icon class="repair-check-icon" icon="check"/>
              <li>Tyres</li>
              <font-awesome-icon class="crepair-check-icon" icon="check"/>
              <li>Replacement Parts</li>
            </ul>
          </div>
        </router-link>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 insurance">
        <router-link to="/insurance">
          <div class="insurance-container">
            <h1 class="insurance-title">Insurance & Documents</h1>
            <hr class="service-divider">
            <ul>
              <font-awesome-icon class="periodic-check-icon" icon="check"/>
              <li>Insurance</li>
              <font-awesome-icon class="ac-check-icon" icon="check"/>
              <li>Registration</li>
              <font-awesome-icon class="repair-check-icon" icon="check"/>
              <li>Renewal</li>
              <font-awesome-icon class="crepair-check-icon" icon="check"/>
              <li>Ownership Transfer</li>
            </ul>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Motormata Assurance -->
  <section id="assurance">
    <div class="motormata-assurance">
      <h1 class="assurance-title">Motormata Assurance</h1>
      <hr class="service-divider">
      <ul>
        <li>Up to ₦5,000,000 insurance protection by Leadway Insurance</li>
        <li>Service per excellence</li>
        <li>Service per excellence</li>
        <li>Service per excellence</li>
        <li class="hidden-element">Service with excellence always</li>
        <li class="hidden-element">Service with excellence always</li>
        <li class="hidden-element">Service with excellence always</li>
      </ul>
      <button class="btn assurance-readmore-btn" id="readMore_btn">Read more</button>
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
          <li class="ordered-list">Select your preferred car service online or call 09023456789
            <ul>
              <li>Schedule an appointment at your convenient date & time</li>
            </ul>
          </li>
          <li class="ordered-list">Get an appointment for a Doorstep Service
            <ul>
              <li>Motormata in-house technicians service your car at your location</li>
            </ul>
          </li>
          <li class="ordered-list">Relax
            <ul>
              <li>Relax and spent time on other things that matter</li>
            </ul>
          </li>
          <li class="ordered-list">Refer and win
            <ul>
              <li>Earn upto ₦5,000 when you refer a friend. Your friend also earns ₦5,000.</li>
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
              <p class="reviewer-name">Angel Baruwa</p>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-5 the-guy second">
              <img class="review-image sec-img" src="../assets/lekan-reviewer.png" alt="reviewer-profile">
              <span class="review-text sec-text">“I enjoyed using Motormata, they help me manage my car very well and I
                really appreciate them for all they’ve done.” </span>
              <p class="reviewer-name2">Lekan Baruwa</p>
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
        <p class="affordable-paragraph">Doorstep service, Free pickup and dropoff. You don’t need to visit the workshop
          if not necessary.</p>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 transparent">
        <font-awesome-icon icon="binoculars" class="icon"/>
        <h4 class="transparent-title">Transparent</h4>
        <p class="transparent-paragraph">Doorstep service, Free pickup and dropoff. You don’t need to visit the workshop
          if not necessary.</p>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 quality">
        <font-awesome-icon icon="award" class="t-icon"/>
        <h4 class="quality-title">Quality</h4>
        <p class="quality-paragraph">Doorstep service, Free pickup and dropoff. You don’t need to visit the workshop
          if not necessary.</p>
      </div>
    </div>
  </section>

  <!-- Numbers section -->
  <section id="numbers">
    <div class="row">
      <p class="col-lg-4 col-md-6 col-sm-6 service-number"><strong>100,000+</strong> Services rendered</p>
      <p class="col-lg-4 col-md-6 col-sm-6 customers-number"><strong>30,000+</strong> Happy Customers</p>
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
        <img src="../assets/technician.png" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Mike</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <p class="experience">5 years Experience</p>
        </div>

      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 first-tech">
        <img src="../assets/technician.png" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Mike</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <p class="experience">5 years Experience</p>
        </div>

      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 first-tech">
        <img src="../assets/technician.png" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Mike</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <p class="experience">5 years Experience</p>
        </div>

      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 first-tech">
        <img src="../assets/technician.png" alt="">

        <div class="staff-content">
          <h4 class="staff-name">Mike</h4>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <font-awesome-icon icon="star" class="star"/>
          <p class="experience">5 years Experience</p>
        </div>

      </div>
    </div>
  </section>

  <hr class="section-divider">

  <!-- Subscription section -->
  <section id="subscription">
    <h1 class="subscription-title">Subscribe</h1>
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
                <span class="answer">Yes.</span>
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
                <span class="answer">Yes, inspection is important. It helps us identify the cause of your car issues so that
                  we can recommended
                  the most appropriate fix. Inspection compromises of complete car health check-up followed by submission of
                  an inspection report on the status of the vehicle.Post evaluation of your car condition,the technician
                  will
                  advice a course of action for the same. Post your approval of the quote your car will be repaired in a
                  Pitstop certified garage near you.</span>
              </div>
          </div>  
        </div>
      </div>
      <!-- <-- Fouthcard -->
      <div class="accordion-item" id="headingFour">
        <h5 class="accordion-header" id="flush-headingFour">
          <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
            <span>What type of engine oil will you use?</span>
          </button>
        </h5>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="card-body">
                <span class="answer">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                  ad squid. 3 wolf moon
                  officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                  wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                  excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
                  nesciunt
                  you probably haven't heard of them accusamus labore sustainable VHS.</span>
              </div>
            </div>
        </div>
      </div>
      <!-- <-- Fithcard --> 
      <div class="accordion-item" id="headingFive">
        <h5 class="accordion-header" id="flush-headingFive">
          <button class="faq-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
            <span>Where will the service be done?</span>
          </button>
        </h5>
        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="card-body">
                <span class="answer">At the comfort of your home for most services while those that require heavy lifting
                  will be done at the workshop.</span>
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
      }
  }, 
  methods: {
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
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//@import '../styles/mediaqueries';


.reg-vehicle{
    background-color: #fff;
    width: 374px;
    display: block;
    text-align: center;
    padding: 20px;
    position: absolute;
    top: 27rem;
    left: 5rem;
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

  
.hero-car-icon  {
    position: absolute;
    top: 104px;
    left: 40px;
    color: #9D9D9D;
    font-size: 18px;
}

.hero-call-icon {
    position: absolute;
    top: 168px;
    left: 40px;
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
    padding: 7% 7%;
}

#services a {
    color: #000;
    text-decoration: none;
}

#services a:hover {
    text-decoration: none;
}

#services li {
    list-style: none;
    margin-left: 20px;
    font-size: 18px;
    padding: 10px;
}

.maintenance-title, .autocare-title, .insurance-title  {
    font-size: 24px;
}

.maintenance-container, .autocare-container, .insurance-container    {
    background-color: #fff;
    padding: 30px 20px;
    margin: 10px auto;
    max-width: 400px;
    border-radius: 3px;
}

.periodic-check-icon {
    color: #53FF6E;
    position: absolute;
    top: 40%;
}

.ac-check-icon    {
    color: #53FF6E;
    position: absolute;
   top: 49%; 
}

.repair-check-icon    {
    color: #53FF6E;
    position: absolute;
    top: 57%;
    
}

.crepair-check-icon    {
    color: #53FF6E;
    position: absolute;
    top: 66%;
    
}

.service-divider    {
    background-color: #53FF6E;
    width: 70px;
}


/* Assurance */
.motormata-assurance    {
    background-image: url('../assets/assurance-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5% 7%;
}

.assurance-title    {
    font-size: 48px;
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
    content: "\2022";
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
      font-size: 48px;
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
  // .accordion-body{
  //     background-color: #f0f0f0;
  // }

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
        top: 348px;
        left: 95px;
        font-size: 12px;
    }
    .hero-call-icon {
        top: 405px;
        left: 95px;
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
    #services li {
        text-align: left;
        padding-left: 4.5rem;
    }
    .periodic-check-icon {
        left: 6rem;
        top: 10.9rem;
    }
    .ac-check-icon {
        left: 6rem;
        top: 13.9rem;
    }
    .repair-check-icon {
        left: 6rem;
        top: 16.9rem;
    }
    .crepair-check-icon {
        left: 6rem;
        top: 7.9rem;
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
    /* How we work */
    .abstract-image {
        position: unset;
        margin: auto 0;
        padding: 5%;
    }
    .abstract-image img {
        max-width: 330px;
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
    .reviewer-name2 {
        position: relative;
        top: 20%;
        left: -6.2rem;
    }
    /* Benefits */
    #benefits {
        padding: 3% 10% 4%;
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
        left: 58px;
        top: 5.6px;
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
    }
    .first-tech img {
        max-width: 20%;
        margin-right: 5%;
        position: relative;
        top: -30px;
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



</style>

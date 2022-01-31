<template>
    <div>
      
  <!-- Header -->
  <section id="header">

    <!-- SideNav -->
    <div class="sidenav" id="sideNav">
      <i onclick="closeNav()" class="closeBtn fas fa-times" onload="closeSideNav()"></i>
      <a onclick="myFunction()" id="sideNav-link" class="nav-link sideNavLink service-link" type="button">Services <i
          class="services-drop-down fas fa-chevron-down"></i></a>
      <div id="sideNavHomeDropDown" class="drop-down-links2">
        <a href="maintenance_repair.html">Maintenance Repair</a>
        <a href="autocare.html">AutoCare Products & Parts</a>
        <a href="insurance.html">Insurance & Documents</a>
      </div>
      <a class="nav-link" href="#">FAQs</a>
      <a class="nav-link" href="#">Contact</a>
      <a href="signin.html"><button class="btn signin-side-navBtn">Sign in</button></a>
      <a href="signup.html"><button class="btn signup-side-navBtn">Create account</button></a>
    </div>

    <!-- The main nav -->
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg sticky-top">
        <a href="javascript:void(0)" class="openNavBtn" onclick="openNav()"><i class="fas fa-bars"></i></a>
        <router-link to="/"><img src="../assets/logo.png" alt="Motormata Logo"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a onclick="myNewFunction()" class="nav-link service-link" type="button">Services
                  <font-awesome-icon class="services-drop-down" icon="chevron-down"/></a>
            </li>
         

            <!-- drop-down links -->
            <div id="homeDropDown" class="drop-down-links">
              <a href="maintenance_repair.html">Maintenance Repair</a>
              <a href="autocare.html">AutoCare Products & Parts</a>
              <a href="insurance.html">Insurance & Documents</a>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">FAQs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#cta">Contact</a>
            </li>
          </ul>
        </div>
        <a href="signin.html"><button class="btn nav-signin-btn">Sign in</button></a>
        <a href="signup.html"><button class="btn nav-createacct-btn">Create account</button></a>
      </nav>

      <div class="hero row">

        <div class="hero-texts col-lg-4 col-md-4">
          <h1 class="hero-title">
            <span class="drive-green">Drive with</span>
            <p class="txt-type" data-wait="3000" data-words='["Confidence", "Safety", "Assurance"]'></p>
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
                really
                appreciate them for all they’ve done.” </span>
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
      <a class="carousel-control-prev" href="#review-carousel" role="button" data-slide="prev">
        <font-awesome-icom  icon="chevron-left" class="carousel-control-prev-icon"/>
      </a>
      <a class="carousel-control-next" href="#review-carousel" role="button" data-slide="next">
        <font-awesome-icon icon="chevron-right" class="carousel-control-next-icon"/>
      </a>
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
      <p class="col-lg-4 col-md-6 col-sm-6 rating-number"><strong>4.8 </strong>4.8 Ratings</p>
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
    <div id="accordion">

      <!-- First Card -->
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
              <span>Can I have my car serviced at the comfort of my home?</span>
            </button>
            <font-awesome-icon icon="chevron-down" class="faq-drop-btn"/>
            <i class="fas fa-chevron-down" data-toggle="collapse" data-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne"></i>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <span class="answer">Yes.</span>
          </div>
        </div>
      </div>

      <!-- Second Card -->
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn collapsed" data-toggle="collapse" data-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo">
              <span>How often should I get my car serviced?</span>
            </button>
            <font-awesome-icon icon="chevron-down" class="faq-drop-btn"/>
            <i class="faq-drop-btn2 fas fa-chevron-down" data-toggle="collapse" data-target="#collapseTwo"
              aria-expanded="true" aria-controls="collapseTwo"></i>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            <span class="answer">Every 3 months or 5,000km, whichever comes first.</span>
          </div>
        </div>
      </div>

      <!-- Third Card -->
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn collapsed" data-toggle="collapse" data-target="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree">
              <span>Is inspection important?</span>
            </button>
            <font-awesome-icon icon="chevron-down" class="faq-drop-btn"/>
            <i class="faq-drop-btn3 fas fa-chevron-down" data-toggle="collapse" data-target="#collapseThree"
              aria-expanded="true" aria-controls="collapseThree"></i>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
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

      <!-- Fourth Card -->
      <div class="card">
        <div class="card-header" id="headingFour">
          <h5 class="mb-0">
            <button class="btn collapsed" data-toggle="collapse" data-target="#collapseFour"
              aria-expanded="false" aria-controls="collapseFour">
              <span>What type of engine oil will you use?</span>
            </button>
            <font-awesome-icon icon="chevron-down" class="faq-drop-btn"/>
            <i class="faq-drop-btn4 fas fa-chevron-down" data-toggle="collapse" data-target="#collapseFour"
              aria-expanded="true" aria-controls="collapseFour"></i>
          </h5>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
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

      <!-- Fifth Card -->
      <div class="card">
        <div class="card-header" id="headingFive">
          <h5 class="mb-0">
            <button class="btn collapsed" data-toggle="collapse" data-target="#collapseFive"
              aria-expanded="false" aria-controls="collapseFive">
              <span>Where will the service be done?</span>
            </button>
            <font-awesome-icon icon="chevron-down" class="faq-drop-btn"/>
          </h5>
        </div>
        <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
            <span class="answer">At the comfort of your home for most services while those that require heavy lifting
              will be done at the
              workshop.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer Section -->
  <section id="footer">

    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 footer-brand">
        <img src="../assets/logo.png" alt="">
        <font-awesome-icon :icon="['fab', 'facebook']" class="ft-brand"/>
        <font-awesome-icon :icon="['fab', 'instagram']" class="ft-brand"/>
        <font-awesome-icon :icon="['fab', 'twitter']" class="ft-brand"/>
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="ft-brand"/>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6  footer-about">
        <h3 class="ft-about-title">About us</h3>
        <ul>
          <li><router-link to="/about">FAQs</router-link></li>
          <li><router-link to="/about">Company</router-link></li>
          <li><router-link to="/about">Team</router-link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6  footer-services">
        <h3 class="ft-service-title">Our Services</h3>
        <ul>
          <li><router-link to="/autocare" href="#">Periodic Services</router-link></li>
          <li><router-link to="/autocare">Body Repairs</router-link></li>
          <li><router-link to="/insurance">Insurance</router-link></li>
          <li><router-link to="/maintenance">Car A/C</router-link></li>
          <li><router-link to="/maintenance">Custom Services</router-link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6  footer-legal">
        <h3 class="ft-legal-title">Legal</h3>
        <ul>
          <li><router-link to="/about">Terms & Conditions</router-link></li>
          <li><router-link to="/about">Privacy Policy</router-link></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Copyrights -->
  <section id="copyright">
    <p class="copyright-content">&copy; Copyright Motormata 2022. All rights reserved 
    </p>
  </section>
    </div>
</template>

<script>
export default {
  name: 'Home',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
*   {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Raleway';
    color: #000;
    font-weight: 400;
}

/* Navbar toggler menu */
.navbar-toggler {
    display: none;
}

.container-fluid    {
    padding: 2% 5% 0;
}

.sticky-top {
    background-color: #fff;
}

ul.navbar-nav  {
    margin: 0 20px;
}

.nav-item   {
    padding: 0 50px;
}

.nav-item a.nav-link   {
    color: #000;
}

.nav-item a.nav-link:hover   {
    color: #bbb;
}

.nav-signin-btn, .signin-side-navBtn {
    margin: 0 20px;
    border: 1px solid #000;
    background-color: transparent;
    width: 85px;
    border-radius: 3px;
}

.nav-signin-btn:hover, .signin-side-navBtn:hover {
    background-color: #000;
    color: #fff;
}

.nav-createacct-btn, .signup-side-navBtn {
    background-color: #53FF6E;
}

.nav-createacct-btn:hover, .signup-side-navBtn:hover {
    background-color: #0fee31;
}

.services-drop-down {
    padding-left: 0.2rem;
    font-size: 0.8rem;
    color: #666;
}

.service-link   {
    cursor: pointer;
}

/* The main navbar Drop-down */
.drop-down-links    {
    display: none;
    background-color: #ffffff;
    border-radius: 5px;
    position: absolute;
    top: 4rem;
    left: 28rem;
    box-shadow: 0px 8px 16px 6px rgba(173, 173, 173, 0.2);
    
}

.drop-down-links a {
    display: block;
    padding: 20px 30px;
    border-bottom: 1px solid rgb(238, 238, 238);
    text-decoration: none;
    color: #8C8C8C;
}

.drop-down-links a:last-child   {
    border-bottom: none;
}

.drop-down-links a:hover  {
    background-color: #97ffa6;
    color: #000;
}

.showing {
    display: block;
}

/* SideNav */
#sideNav    {
    width: 40%;
    background-color: rgb(255, 255, 255);
    display: none;
    overflow: hidden;
    padding: 15% 0;
    text-align: center;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 1;
    box-shadow: 10px 8px 20px 6px rgba(0, 0, 0, 0.2);
}

#sideNav a.nav-link {
    color: #000;
    padding: 10% 20px;
    background-color: #fff;
}

.drop-down-links2 a {
    display: block;
    padding: 10% 20px;
    text-align: center;
    text-decoration: none;
    color: #000;
}

#homeDropDown a:hover  {
    background-color: #97ffa6 !important;
    color: #000;
}

.closeBtn   {
    position: absolute;
    left: 18rem;
    top: 2rem;
    cursor: pointer;
}

.signin-side-navBtn {
    width: 140px;
    position: relative;
    top: 0.5rem;
    left: 5rem;
}

.signup-side-navBtn {
    text-align: center;
    position: relative;
    top: 4rem;
    left: -5.3rem;
}

.drop-down-links2   {
    background-color: #fff;
    position: relative;
    margin: 0;
    top: -30px;
    display: none;
}

.openNavBtn {
    display: none;
}

.openNavBtn:hover {
    color: #000;
}

.showing {
    display: block;
}

/* Hero */
.hero   {
    padding: 5% 1.3% 2%;
}

.drive-green {
    color: #008937;
    font-size: 48px;
    font-weight: 400;
}

.hero-title   {
    color: #000;
    font-size: 72px;
    font-weight: 600;
}

.hero-paragraph {
    font-size: 24px;
    color: #8C8C8C;
}

/* animation cursor */
.txt-type > .txt {
    border-right: 1px solid #2c2c2c;
}

img.hero-illustration   {
    max-width: 55%;
    position: relative;
    left: 120px;
    top: -20px;
}

/* register your vehicle container */
.reg-vehicle    {
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
    top: 180px;
}

.ac-check-icon    {
    color: #53FF6E;
    position: absolute;
    top: 228px;
}

.repair-check-icon    {
    color: #53FF6E;
    position: absolute;
    top: 275px;
}

.crepair-check-icon    {
    color: #53FF6E;
    position: absolute;
    top: 322px;
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
      left: -100px;
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
      left: 130px;
  }
  .t-icon{
    position: absolute;
    margin-top: 5px;
    left: 600px;
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

  #headingOne, #headingTwo, #headingThree, #headingFour, #headingFive   {
      background-color: #f0f0f0;
  }

  .faq-drop-btn{
      float: right;
      cursor: pointer;
      margin-top: 10px;
  }

  #accordion .card .card-header h5 .btn-link {
    color: #000;
  }

  #accordion .card .card-header h5 .btn-link:hover {
    text-decoration: none;
  }

  /* Footer */
  #footer   {
      padding: 5% 7%;
  }

  .footer-brand img{
      display: block;
      margin-bottom: 10%;
  }

  .ft-brand{
      margin: 8px;
      color: #9D9D9D;
  }

  .footer-brand i:hover   {
    color: #53FF6E;
}

.ft-about-title {
    padding-bottom: 3%;
}

.footer-about li{
    list-style-type: none;
    padding-top: 3%;
}

.footer-about li a{
    color: #9D9D9D;
    text-decoration: none;
}

.footer-about li a:hover{
    color: #53FF6E;
}

.ft-service-title   {
    padding-bottom: 3%;   
}

.footer-services li{
    list-style-type: none;
    padding-top: 3%;
}

.footer-services li a{
    text-decoration: none;
    color: #9D9D9D;
}

.footer-services li a:hover{
    color: #53FF6E;
}

.ft-legal-title  {
    padding-bottom: 3%;   
}

.footer-legal li{
    list-style-type: none;
    padding-top: 3%;
}

.footer-legal li a{
    text-decoration: none;
    color: #9D9D9D;
}

.footer-legal li a:hover{
    color: #53FF6E;
}

/* Copyright */
#copyright  {
    padding: 3% 7% 1%;
    background-color: #e6e6e6;
    text-align: center;
}

.copyright-content  {
    color: #7c7c7c;
}

.copyright-content a {
    color: #000000;
}



/************************************************ Signup page ************************************************/
#signup {
    background-color: #97ffa6;
    padding: 5% 7%;
    height: 100vh
}

.signup-image   {
    position: absolute;
    left: 40rem;
    width: 38rem;
}

.signup-container   {
    background-color: #fff;
    display: block;
    width: 40%;
    padding: 5% 3%;
    margin-bottom: 5%;
}

.create-acct-title  {
    font-size: 1rem;
}

.create-acct-paragraph  {
    color: #6F6F6F;
}

.signup-container input  {
    display: block;
    width: 100%;
    margin: 3% 0;
    padding: 10px;
}

.create-acct-btn    {
    padding: 10px 20px;
    background-color: #53FF6E;
    margin-top: -1rem;
    font-size: 1rem;
    display: inline-block;
}

.create-acct-btn:hover   {
    color: #fff;
    background-color: #000000;
}

.already-have-acct  {
    display: inline-block;
    width: 190px;
    font-size: 0.8rem;
    margin-top: 1rem;
    padding-left: 1rem;
}

.already-have-acct a {
    color: #53FF6E;
}

.already-have-acct a:hover {
    color: #00410a;
    text-decoration: none;
}

.go-home-link   {
    position: absolute;
    left: 150px;
    top: 40px;
    color: black;
}

.go-home-link:hover  {
    color: #aaa;
    text-decoration: none;
}

/******************************************* Sign in *******************************************/
.signin-divider {
    width: 40%;
    margin-top: 5%;
    display: inline-block;
    background-color: #000;
}

.signin-divider2 {
    width: 40%;
    margin-top: 5%;
    float: right;
    background-color: #000;
}

.signup-container span  {
    position: relative;
    top: -10px;
    left: 25px;
}

.sign-with-email-btn    {
    display: block;
    width: 100%;
    margin: 5% 0;
    padding: 10px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
}

.sign-with-email-btn:hover    {
    background-color: #646464;
    color: rgb(255, 255, 255);
}

.signwithemaillink:hover  {
    text-decoration: none;
}

.signin-acct-btn    {
    padding: 10px 20px;
    background-color: #53FF6E;
    margin: 1.5rem 0 1rem;
    font-size: 1rem;
    display: inline-block;
    width: 45%;
}

.signin-acct-btn:hover   {
    color: #fff;
    background-color: #000000;
}

.pass-forgot    {
    float: right;
    font-size: 0.9rem;
    text-align: right;
}

.pass-forgot  a  {
    color: #000;
    text-decoration: none;
}

.pass-forgot  a:hover  {
    color: rgb(78, 78, 78);
}

.dont-have-acct {
    font-size: 0.8rem;
    text-align: center;
}

.dont-have-acct a {
    color: #53FF6E;
}

.dont-have-acct a:hover {
    color: #00410a;
    text-decoration: none;
}


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
    padding: 30px 60px;
    margin: 50px;
    border-radius: 5px;
    position: absolute;
    top: 64.1rem;
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
    top: 64.1rem;
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
</style>

<template>
 <div>
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
    <div class="num-sect">
      <div>
         <font-awesome-icon class="num-sect-icon" icon="users"/>
         <p><strong>20,000+</strong></p>
        <p> Happy Customers</p>
      </div>
      <div>
          <font-awesome-icon class="num-sect-icon" icon="handshake"/>
         <p><strong>50,000+</strong></p>
        <p> Services rendered</p>
      </div>
      <div>
        <font-awesome-icon class="num-sect-icon" icon="user-check"/>
        <p><strong>4.8 </strong></p>
        <p>Ratings</p>
      </div>  
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

    <div class="row tech-row">
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
        <img class="tech-img" src="../assets/samson.jpg" alt="">

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
  
 </div>
</template>

<script>
    export default {
       name:'HomeSubSectionTwo',
       data: () =>{
        return{

        }
       }
    }
</script>

<style lang="scss" scoped> 
.service-divider {
    background-color: #53FF6E;
    width: 70px;
    margin: 0;
    opacity: 0.8;
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
      left: 9%;
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

  .num-sect{
    display: flex;
    justify-content: space-around;
  }

  .num-sect p{
    margin: 0;
  }
  .num-sect-icon{
    font-size: 24px;
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
      max-width: 150px;
      margin-right: 5%;
      position: relative;
      top: -30px;
  }
  .tech-img{
     border-radius: 19%;
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
  @media only screen and (min-width: 768px) and (max-width: 1024px){
    .benefit-title, .technician-title, .subscription-title{
      font-size: 28px;
    }
    .first-tech img{
      max-width: 100px;
    }
    .screenshot{
      display: none;
    }
    
  }
  @media only screen and (min-width: 425px) and (max-width: 767px){
    .screenshot{
      display: none;
    }
    .first-tech img{
      max-width: 90px;
    }
    .tech-row{
      display: grid;
      grid-template-columns: auto auto;
    }
    .screenshot{
      display: none;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 425px){
    .benefit-title, .technician-title{
      text-align: center;
      font-size: 30px;
    }
    .subscription-title{
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
    #download {
        text-align: center;
    }
    .app-download {
        margin-top: 5%;
    }
    .download-title {
        margin-bottom: 5%;
    }
    img.googlePlay {
        max-width: 130px;
    }
    img.appStore {
        max-width: 110px;
    }
    .tech-row{
      padding-top: 40px;
      gap: 5px;
    }
    .first-tech img{
      max-height: 130px;
    }
    .convinience, .affordable, .transparent, .quality{
      margin: 2% 5% 0;
      max-width: 100%;
      text-align: center;
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
    .service-divider{
      margin: 5% auto 10%;
    }
    .screenshot{
      display: none;
    }
  }
</style>

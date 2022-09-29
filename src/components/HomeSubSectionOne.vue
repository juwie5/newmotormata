 <template>
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
                <div class="cards" id="tabview">
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
 </template>


<script>
    export default {
        name: 'HomeSubSectionOne',
        data: () => {
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

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
 
 @media only screen and (min-width: 768px) and (max-width:1024px){
  #services{
    padding-top: 10%;
  }
  .cards-set{
    grid-template-columns: auto auto;
    row-gap: 10px;
    align-items: center;
  }
  #tabview{
    align-self: end;
  }
  .assure-img{
    width: calc(75% - 14rem);
  }
  .review-text{
  left: 82px;
  }
  .sec-text{
    left: 0;
  }
  .assurance-title, .hw-we-wrk-title, .review-title{
    font-size: 28px
  }
 }
</style>
 
 
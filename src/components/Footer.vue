<template>
    <div>
    <section id="footer">
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 footer-brand">
        <img  class="footer-img" src="../assets/logo.png" alt="">
        <font-awesome-icon :icon="['fab', 'facebook']" class="ft-brand"/>
        <font-awesome-icon :icon="['fab', 'instagram']" class="ft-brand"/>
        <font-awesome-icon :icon="['fab', 'twitter']" class="ft-brand"/>
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="ft-brand"/>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6  footer-about">
        <h3 class="ft-about-title">About us</h3>
        <ul class="row-ul">
          <li><router-link to="/about">FAQs</router-link></li>
          <li><router-link to="/about">Company</router-link></li>
          <li><router-link to="/about">Team</router-link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6  footer-services">
        <h3 class="ft-service-title">Our Services</h3>
        <ul class="row-ul">
          <li><router-link to="/autocare" href="#">Periodic Services</router-link></li>
          <li><router-link to="/autocare">Inspection & Diagnostics</router-link></li>
          <li><router-link to="/insurance">Insurance & Papers</router-link></li>
          <li><router-link to="/maintenance">Spares & Repair</router-link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6  footer-legal">
        <h3 class="ft-legal-title">Legal</h3>
        <ul class="row-ul">
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
    name:'Footer'
}
</script>

<style lang="scss" scoped>
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

.row-ul{
  padding: 0;
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

@media only screen and (min-width: 320px) and (max-width: 475px){
  .ft-about-title, .ft-service-title, .ft-legal-title{
    font-size: 20px;
  
  }
  .footer-about, .footer-services, .footer-legal{
    ul{
      font-size: 16px;
    }
  }
  #footer{
    text-align: center;
  }
  

}

</style>
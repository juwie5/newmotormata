<template>
    <div id="bod">
        <Navbar class="space"/>

        <section class="contain">
            <div>
                <h2 class="contain-h2">Contact Support</h2>
                <p class="contain-p">We're avaible around the clock. <br/>
                 Let us know how we can help!</p>
            </div>
           
            <div class="box"> 
                <form class="formmain" @submit.prevent="sendEmail()">
                    <input type="text" placeholder="Firstname" v-model="Firstname">
                    <input type="text" placeholder="Lastname" v-model="Lastname">
                    <input type="email" placeholder="Email" v-model="email">
                    <input type="tel" placeholder="Phone number" v-model="number">
                    <input type="text" placeholder="Address" v-model="address">
                    <textarea name="comments" id="comments" row="6"  class="full" placeholder="Type your message here" v-model="message"></textarea>
                    <input type="submit" value="Submit">                      
            </form>
            </div>
        </section>
        <Footer/>
    </div>
</template>

  <script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    import mailjet from 'node-mailjet'
    import axios from 'axios'
  export default {
      name: 'Home',
      components: {
          Navbar,
          Footer
      },
      data: () =>{
          return{
              Firstname: null,
              Lastname: null,
              email:null,
              number: null,
              address: null,
              message: null

          }
      },
      methods: {
        























        
            }
  }
  </script>

  <style scoped>
  #bod{
      padding-top: 2%; 
  }
  .space{
      padding: 0 5% 0;
      margin-bottom: 25px;
  }


  .contain{
      display: flex;
      justify-content: space-around;
      padding: 5%;
      align-items: flex-start;    
      background-image: url(/img/benefit-bg.c234ef8f.png);
          background-repeat: no-repeat;
         background-size: cover;

  }
    .contain-h2{
     font-size: 4rem;
    letter-spacing: -.03em;
    line-height: 8.6rem;
    font-weight: 500;
  }
  .contain-p{
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 3.2rem;
  }
  

  .box{
      width:  50%;
      padding: 2% 0 ;
  }

  .go-home-link   {
      position: absolute;
      top: 1rem;
      left: 21.5rem;
    color: black;
    text-decoration: none;
}

.go-home-link:hover  {
    color: #aaa;
    text-decoration: none;
}
 .formmain{
   display: flex;
   flex-direction: column;
  
 }

 .pad{
     padding: 2% 0;
 }

input{
    width: 48%;
    padding: 10px;
    margin: 1% ;
}

.full{ 
    width: 48%;
    margin: 1%  0 1% 7px;
}

textarea{
    padding: 10px;
    transition: border-color .3s ease,color .3s ease,outline-color .3s ease;
}
 
 input[type='submit']{
     display: block;
     background-color: #53FF6E;
     border: 1px solid transparent;
     border-radius: 3px;
     font-size: 1rem;
     font-weight: 400;
 }

 input[type='submit']:hover{
     background-color: #000;
     color: #fff;
 }

 @media only screen and (min-width: 320px) and (max-width: 475px) {
   .contain{
       flex-direction: column;
      
   }  
   .box{
       width: 100%;
   }
   input{
       width: 100%;
   }
   .full{
       width: 100%;
       margin-left: 5px;
   }
   .contain-h2{
    font-size:  calc(3rem - 3vw);
    line-height: 4.4rem;
   }
   .contain-p{
    font-size: calc(1.8rem - 3vw);
    line-height: 2.8rem;
   }
 }
  
  </style>
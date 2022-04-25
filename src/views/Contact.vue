<template>
    <div id="bod">
        <section class="contain">
            <router-link to="/" class="go-home-link"><font-awesome-icon icon="chevron-left"/> Home</router-link>
            <div class="box">
                
                    <h2>Get in Touch</h2> 
                
                <form class="formmain">
                <div>
                 <div class="pad">
                    <input type="text" placeholder="Firstname" v-model="Firstname">
                    <input type="text" placeholder="Lastname" v-model="Lastname">
                 </div>
                 <div class="pad">
                    <input type="email" placeholder="Email" v-model="email">
                    <input type="tel" placeholder="Phone number" v-model="number">
                 </div>
                </div>
                <div>
                <div class="pad">
                    <input type="text" class="full" placeholder="Address" v-model="address">
                </div>
                <div class="pad">
                    <textarea name="comments" id="comments" cols="30" class="full" placeholder="Type your message here" v-model="message"></textarea>
                </div>
                <div class="pad">
                    <input type="submit" value="Submit">
                </div>
                </div>                
            </form>
            </div>
        </section>
    </div>
</template>
  <script>
  export default {
      name: 'Home',
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
      height: 100vh;
      background-color: #97FFA6;
      padding-top: 3%; 
  }
  h2{
      font-size: 24px;
  }
  
  .contain{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;    
  }

  .box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width:  50%;
      background-color: #fff;
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
    width: 98%;
}

textarea{
    padding: 10px;
}
 
 input[type='submit']{
     display: block;
     margin: 0 auto;
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
     
 }
  
  </style>
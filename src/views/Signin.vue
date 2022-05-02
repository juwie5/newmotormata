<template>
    <div>
          <section id="signup">         
            <router-link to="/" class="go-home-link"> <font-awesome-icon icon="chevron-left"/>  Go home</router-link>
            <div class="container-fluid">
                <img class="signup-image" src="../assets/Hero-illustration.png" alt="">
                <div class="signup-container">
                    <form action="#">
                        <h4 class="create-acct-title">Sign in to your account</h4>
                        <p class="create-acct-paragraph">Fill the form below to sign in</p>
                        <div v-if="show">
                        <input type="tel" name="plateNumber" id="plateNumber" placeholder="Plate Number" v-model="form.plateNumber" required>
                        <input type="password" name="password" id="password" placeholder="Password" v-model="form.password" required>
                        </div>
                        <div v-else>
                        <input type="email" name="Email" id="email" placeholder="Email" v-model="form.email" required>
                        <input type="password" name="password" id="password" placeholder="Password" v-model="form.password1" required>
                        </div>
                        <p>{{error}}</p>
                        <p class="pass-forgot"><a href="#">Forgot Password?</a></p>
                        <button type="button" class="btn signin-acct-btn" @click="signIn()">Sign in</button>
                        <hr class="signin-divider">
                        <span>Or</span>
                        <hr class="signin-divider2">
                        <button @click="show = !show" v-if="show" type="button" class="btn sign-with-email-btn">Sign in with email</button>
                        <button @click="show =!show" v-if="!show" type="button" class="btn sign-with-email-btn">Sign in with Plate number</button>
                        <p class="dont-have-acct">
                            <router-link to="/signup">Create account</router-link> 
                            if you don't have an account.
                        </p>
                    </form>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Signin',
    data: () =>{
        return{
            show: true,
            form:{
                plateNumber: '',
                password: '',
                email:'',
                password1: ''
            }
        }
    },
    computed:{
        ...mapGetters({
            error: 'auth/error'
        })    
    },
    methods:{
        ...mapActions({
            authSignin: 'auth/authSignin'
            }),
        signIn(){
            this.authSignin(this.form)
         }  
          }
}
</script>


<style scoped lang="scss">
#signup {
    background-color: #97ffa6;
    padding: 5% 7%;
    height: 100vh;
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
    color: black;
    text-decoration: none;
    position: absolute;
    left: 150px;
    top: 40px;
}

.go-home-link:hover  {
    color: #aaa;
    text-decoration: none;
}

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

.sign-with-email-btn{
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
.signwithemaillink{
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
    color: #53FF6E;
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

@media only screen and (min-width: 320px) and (max-width: 475px){
    .signup-container{
        padding: 10% 7%;
        width: 100%;
        span{
            left: 10px;
        }
    }
       .go-home-link {
        left: 33px;
        top: 85px;
    }
}

@media(max-width: 320px){
    .go-home-link {
        left: 33px;
        top: 2px;
        font-size: 14px;
    }
    .signin-divider, .signin-divider2{
        display: none;
    }
    .signup-container{
        span{
            display: block;
            text-align: center;
        }
    }
}


</style>


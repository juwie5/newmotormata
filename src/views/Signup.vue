<template>
    <div>
        <section id="signup">
        <router-link to="/" class="go-home-link"><font-awesome-icon icon="chevron-left"/>&nbsp; Go home</router-link>
        <div class="container-fluid">
            <img class="signup-image" src="../assets/Hero-illustration.png" alt="">
            <div class="signup-container">
                <form action="mailto:ayomidbankole@gmail.com" enctype="text/plain" method="POST">
                    <h4 class="create-acct-title">Create your account</h4>
                    <p class="create-acct-paragraph">Fill the form below to register</p>
                    <input type="text" name="fullname" id="fullname" placeholder="Fullname" required>
                    <input type="email" name="email" id="email" placeholder="Email address" required>
                    <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Mobile Number" required>
                    <input type="password" name="password" id="password" placeholder="Create Password" required>
                    <button type="submit" class="btn create-acct-btn">Create account</button>
                    <p class="already-have-acct"><a href="signin.html">Sign in</a> if you already have an account.</p>
                </form>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'Signup',
}
</script>

<style lang="scss" scoped>
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
    text-decoration: none;
}

.go-home-link:hover  {
    color: #aaa;
    text-decoration: none;
}

@media only screen and (min-width: 320px) and (max-width: 475px){
    .signup-container{
        padding: 10% 7%;
        width: 100%;
    }
    

}
@media (min-width: 2560px){
    .signup-image{
        left: 87rem;
        width: 53rem;
    }
}

@media(max-width: 320px){
    .go-home-link {
        left: 33px;
        top: 2px;
        font-size: 14px;
    }
    .create-acct-btn{
        margin: 0;
    }
}

</style>


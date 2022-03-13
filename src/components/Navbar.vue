<template>
<div>
    <section>

            <!-- SideNav -->
        <div class="sidenav" id="sideNav">
            <font-awesome-icon icon="times" @click="closeNav()" class="closeBtn"/>
            <a @click="toggleList()"  id="sideNav-link" class="nav-link sideNavLink service-link" type="button">Services<font-awesome-icon 
               icon="chevron-down" class="services-drop-down"/></a>
            <div id="sideNavHomeDropDown" class="drop-down-links2" v-bind:style='{"display" : (isActive? "block" : "none" )}'>
                <router-link to="/maintenance">Periodic Services</router-link>
                <router-link to="/autocare">Inspection & Diagnostics</router-link>
                <router-link to="/insurance">Insurance & Papers</router-link>
                <router-link to="/insurance">Spares & Repair</router-link>
            </div>
            <router-link to="/home#faqs" class="nav-link">FAQs</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <router-link to="/signin"><button class="btn signin-side-navBtn">Sign in</button></router-link>
            <router-link to="/signup"><button class="btn signup-side-navBtn">Create account</button></router-link>
        </div>

            <!-- The main nav -->
        <div id="nav-pos">
            <nav class="navbar navbar-expand-lg">
                <font-awesome-icon icon="bars" @click="openNav()" class="openNavBtn"/>
                <router-link to="/"><img src="../assets/logo.png" alt="Motormata Logo"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbarplace" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a @click="myNewFunction()" class="nav-link service-link" data-bs-toggle="dropdown" type="button">Services
                        <font-awesome-icon class="services-drop-down" icon="chevron-down"/></a>
                    </li>
                    <!-- drop-down links -->
                    <div id="homeDropDown" class="drop-down-links sideNav">
                            <router-link to="/maintenance">Periodic Services</router-link>
                            <router-link to="/autocare">Inspection & Diagnostics</router-link>
                            <router-link to="/insurance">Insurance & Papers</router-link>
                            <router-link to="/insurance">Spares & Repair</router-link>
                    </div>
                    <li class="nav-item">
                    <router-link :to="{path:'/', hash:'#faqs'}" class="nav-link">FAQs</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>
                </ul>
                </div>
                <router-link to="/signin"><button class="btn nav-signin-btn">Sign in</button></router-link>
                <router-link to="/signup"><button class="btn nav-createacct-btn">Create account</button></router-link>
            </nav>
       </div>     
    </section>        
</div>

</template>

<script>
export default {
    name:'Navbar',
    data: ()=>{
        return{
         isActive: false       
        }
    },
    methods:{
         myNewFunction() {
          document.getElementById("homeDropDown").classList.toggle("showing");
        },
     
        
        //SideNav
        openNav() {
         document.getElementById("sideNav").style.display = "block";
        },

        closeNav() {
        document.getElementById("sideNav").style.display = "none";
        },
        toggleList(){
                this.isActive = !this.isActive
        }


    },
  

}
</script>


<style scoped lang="scss">

/* Navbar toggler menu */
.navbar-toggler {
    display: none;
}

.container-fluid    {
    padding: 2% 5% 0;
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

.navbarplace {
    display: flex;
    justify-content: flex-end;
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
    width: 44%;
    background-color: rgb(255, 255, 255);
    display: none;
    overflow: hidden;
    padding: 15% 0;
    text-align: center;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    // z-index: 0;
    box-shadow: 10px 8px 20px 6px rgba(0, 0, 0, 0.1);
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
    left: 80%;
    top: 2rem;
    cursor: pointer;
}

.signin-side-navBtn {
    width: 8.5rem;
    margin: 0 10px 10px 10px;
   
}

.signup-side-navBtn {
    text-align: center;
  
}

.drop-down-links2   {
    background-color: #fff;
    margin: 0;
    display: none;
}

.openNavBtn {
    display: none;
}

.openNavBtn:hover {
    color: #000;
}
.active{
    display: block;
}

@media only screen and (min-width: 320px) and (max-width: 475px){
    .openNavBtn{
    display: block;
    
    }  
    
    .navbar-nav{
        display: none;
    }

    .drop-down-links2 a {
        color: #9D9D9D;
        padding: 15px 30px !important;
        border-bottom: 1px solid #ddd;
        text-decoration: none;
    }
    .drop-down-links2 a:last-child {
        border-bottom: none;
    }
}

</style>


<template>
<div>
    <section id="header">

            <!-- SideNav -->
        <div class="sidenav" id="sideNav">
            <font-awesome-icon icon="times" @click="closeNav()" class="closeBtn" onload="closeSideNav()"/>
            <a @click="myFunction()" id="sideNav-link" class="nav-link sideNavLink service-link" type="button">Services<font-awesome-icon 
              icon="chevron-down"  class="services-drop-down"/></a>
            <div id="sideNavHomeDropDown" class="drop-down-links2">
                <a href="maintenance_repair.html">Maintenance Repair</a>
                <a href="autocare.html">AutoCare Products & Parts</a>
                <a href="insurance.html">Insurance & Documents</a>
            </div>
            <router-link to="/home#faqs" class="nav-link">FAQs</router-link>
            <a class="nav-link" href="#">Contact</a>
            <router-link to="/signin"><button class="btn signin-side-navBtn">Sign in</button></router-link>
            <router-link to="/signup"><button class="btn signup-side-navBtn">Create account</button></router-link>
        </div>

            <!-- The main nav -->
        <div>
            <nav class="navbar navbar-expand-lg sticky-top">
                <font-awesome-icon href="javascript:void(0)" icon="bars" @click="openNav()" class="openNavBtn"/>
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
                    <div id="homeDropDown" class="drop-down-links">
                    <router-link to="/maintenance">Maintenance Repair</router-link>
                    <router-link to="/autocare">AutoCare Products & Parts</router-link>
                    <router-link to="/insurance">Insurance & Documents</router-link>
                    </div>
                    <li class="nav-item">
                    <router-link :to="{path:'/', hash:'#faqs'}" class="nav-link">FAQs</router-link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#cta">Contact</a>
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

        }
    },
    methods:{
         myNewFunction() {
          document.getElementById("homeDropDown").classList.toggle("showing");
        },
         myFunction() {
         document.getElementById("sideNavHomeDropDown").style.display = "block";
        },
        
        //SideNav
        openNav() {
         document.getElementById("sideNav").style.display = "block";
        },

        closeNav() {
        document.getElementById("sideNav").style.display = "none";
        },

    }

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

.sticky-top {
    position: sticky;
    background-color: #fff;
    top: 0;
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


</style>


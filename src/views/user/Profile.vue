<template>
    <div>
        <section>
            <nav class="dash-nav">
             <div><img class="nav-img" src="../../assets/logo.png" alt="logo"></div>
              <div>
                <h2 class="userName">Cart <font-awesome-icon class="shop" icon="shopping-bag"/></h2>       
            </div>
            </nav>
        </section>
        <section class="profile-content">
            <div ref="content" class="content">
                <router-link to="/dashboard/profile"><h4 class="cntname active">Personal Info</h4></router-link>
                <router-link to="/dashboard/profile/security"><h4 class="cntname">Security</h4></router-link> 
                <router-link to="/dashboard/profile/messages"><h4 class="cntname">Messages</h4></router-link>
                <router-link to="/dashboard/profile/settings"><h4 class="cntname">Settings</h4></router-link>
            </div>
            <div><router-view></router-view></div>
        </section>
        <section id="dash-footer">
        <footer class="dash-footer-copyrights">
            <p class="dash-copyrights">&copy; Copyrights 2022. All Rights reserved.</p>
        </footer>
       </section>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data: () => {
        return{
            isActive: false

        }
    },
    methods:{
        addClass(){
            let header = this.$refs.content
            let btns = header.getElementsByClassName("cntname")
            for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    },
    mounted(){
            this.addClass();
    }    
}
</script>

<style lang="scss" scoped>
.dash-nav{   
 display: flex;
 background-color: #ffffff;
 justify-content: space-around;
 position: fixed;
 top: 0;
 width: 85%;
 max-height: 80px; 
 padding-top: 15px;
}

h2{
    font-size: 20px;
}

.shop{
    font-size: 32px;
}

.nav-img{
    margin-right: 395px;
}

.profile-content{
    display: flex;
    margin-top: 75px;
    width: 100%;
    padding: 0 3%;
}

.content{
    width: 25%;
    padding-top: 20px;
}

.content a{
    text-decoration: none;
    color:#000000;


}

.cntname{
    padding: 4% 3%;
    max-width: 50%;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    text-align: center; 
    margin: 0 auto;
    width: 150px;

}

#dash-footer {
    background-color: #ebebeb;
    padding: 1% 5%;
    width: 100%;
    position: fixed;
    bottom: 0;
}

.dash-footer-copyrights {
    text-align: center;
}

#dash-footer footer p {
    margin: auto;
    color: #777;
}
.active{
    background: #DAFFE0;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
}
</style>
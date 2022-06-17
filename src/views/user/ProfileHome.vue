<template>
    <div>
        <section>
            <div class="pro-top">
                <img class="profile-img" src="../../assets/user-profile.png" alt="">
                <div>
                    <h1>{{user.username}}</h1>
                    <p class="sub-text">Manage your personal info, change <br> password and more.</p>
                </div>
            </div>
            <div>
                <h3>Personal Info</h3>
            </div>
            <div>
                <div class="pro-mid">
                    <div class="pro-input">
                    <label for="Fullname">Fullname</label>
                    <input type="text" name="Fullname" :placeholder="user.username">
                    </div>
                    <div class="pro-input">
                    <label for="email">Email</label>
                    <input type="email" name="email" :placeholder="user.email">
                    <p class="sub-text">email is not verified <span class="green-text">Send Again</span></p>
                    </div> 
                </div>
                <div class="pro-mid">
                    <div class="pro-input">
                    <label for="Phonenumber">Mobile number</label>
                    <input type="tel" name="Phonenumber" :placeholder="user.phone_no">
                    </div>
                    <div class="pro-input">
                    <label for="password">Password</label>
                    <input type="password" name="Password" placeholder=".............">
                    </div> 
                </div>
                <button class="pro-btn">Edit Profile</button>
            </div>
        </section>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProfileHome',
    data: ()=> {
        return{
           
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    }
    
}
</script>


<style  lang="scss" scoped>
.pro-top{
    display: flex;
    margin-bottom: 20px;
}

.profile-img{
    vertical-align: middle;
    width: 87px;
    margin-right: 15px;
}

h1{
    font-size: 24px;
    font-weight: 700;
    margin: 0;
}

h3{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
}

.sub-text{
    font-size: 14px;
    font-weight: 500;
    color: #BEBEBE;
}
.pro-mid{
    display: flex;
}

.pro-input{
    display: flex;
    flex-direction: column;
    margin-right: 150px;
}

label{
    font-size: 14px;
    font-weight: 400;
    color:#050505;

}

input{
    border: 1px solid #D1D1D1;
    box-sizing: border-box;
    border-radius: 3px;
    width: 245px;
    height: 32px;
    padding: 5px;
}
.green-text{
    color: #53FF6E;
}

.pro-btn{
   width: 146px;
    height: 34px;
    background-color: #000000;
    border-radius: 5px;
    color: #fff;
    outline: none; 
    border:  none;
    margin: 20px 150px 0 0;
    float: right;
}

@media only screen and (min-width : 320px) and (max-width: 430px){

    .pro-mid {
        flex-direction: column;
        align-content: center;
    }
    .pro-top {
        flex-direction: column;
        align-items: center;
    }
    .pro-input{
        margin-right: 50px;
    }
    .pro-btn{
      margin: 20px 50px 50px 50px;  
    }
}
</style>
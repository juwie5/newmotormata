<template>
   <div>
       <!-- Dash Navigation  -->
       <section class="dash-contain">
           <nav class="dash-nav">
               <div><img  class="nav-img" src="../assets/logo.png" alt="logo"></div>
               <div>
                   <h2 @click="myNewFunction" class="userName"> {{user.username}} <img src="../assets/user-profile.png" alt="userProfile"> <font-awesome-icon icon="caret-down"/></h2>    
               </div>
               <div id="dashDropDown" class="drop-down" ref="dash">
                            <router-link to="/dashboard/profile"><font-awesome-icon icon="user-alt"/> Profile</router-link>
                            <router-link to="/dashboard/cart"><font-awesome-icon icon="shopping-bag"/> Cart</router-link>
                            <router-link to="/dashboard/profile/messages"><font-awesome-icon icon="comment-alt"/> Messages</router-link>
                            <router-link to="/"> <font-awesome-icon icon="sign-out-alt"/> Logout</router-link>
                </div>
           </nav>  
       </section>
       <!-- Dash Body  -->
       <section class="dash-contain">
          <div class="mycar">
            <h2 class="mycar-top-title">My Car</h2>
            <button class="btn mycar-btn">Renew Papers</button>

            <div class="renew-paper-modal">

            </div>
            <button class="btn mycar-btn2" @click="addCarModal">Add Car <font-awesome-icon icon="plus"/></button>
         </div>
         <div class="car-transparent-bg" ref="car">
            <font-awesome-icon icon="times-circle" class="car-type-clsBtn" @click="closeCarModal"/>
            <div class="addCar-modal">
                <label for="cars">What Kind of Car do you drive?</label>
                <select id="car-options" name="cars">
                    <option value="" disabled selected>Select your car name here</option>
                    <option v-for="car in cars" :value="car.toLowerCase()">{{car}}</option>
                </select>

                <label for="car-model">What is your car Model?</label>
                <select id="choices">
                    <option value="" disabled selected>Please select an option</option>
                    <option value="lcvt">L CVT</option>
                    <option value="lcvt">Corolla</option>
                    <option value="lcvt">Big Daddy</option>
                    <option value="lcvt">Pavillion</option>
                    <option value="lcvt">Camry</option>
                </select>

                <label for="car-model">What year is your model?</label>
                <select id="choices">
                    <option value="" disabled selected>Please select an option</option>
                    <option value="lcvt">2001</option>
                    <option value="lcvt">2010</option>
                    <option value="lcvt">2011</option>
                    <option value="lcvt">2002</option>
                    <option value="lcvt">2015</option>
                </select>

                <button type="submit" class="btn car-type-btn">Done</button>
            </div>
        </div>

        <div class="dash-mycar-details">
            <h4 class="car-name">Toyota Corolla</h4>
            <button class="btn" @click="openModal">Details &nbsp;&nbsp;<font-awesome-icon icon="caret-down"/></button>
        </div>
        <!-- My Car Modal details -->
        <div class="transaprent-modal" ref="modal">
            <div class="modal-container scroller">
                <font-awesome-icon icon="times" class="modal-close" @click="closeModal"/>
                <h2 class="car-name">Toyota Corolla</h2>
                <p class="car-type">2021 Corolla L CVT</p>
                <img src="../assets/toyota.png" alt="">

                <div class="car-elements">
                    <div class="row">
                        <div class="element1 col-lg-4 col-md-4 col-sm-2">
                            <h5 class="type1">Engine</h5>
                            <p class="car-desc">4 Cylinder Engine</p>
                        </div>
                        <div class="element2 col-lg-4 col-md-4 col-sm-2">
                            <h5 class="type2">Transmission</h5>
                            <p class="car-desc">Automatic</p>
                        </div>
                        <div class="element4 col-lg-4 col-md-4 col-sm-2">
                            <h5 class="type1">Battery Type</h5>
                            <p class="car-desc">4 Cylinder Engine</p>
                        </div>
                    </div>

                    <div class="modal-divider"></div>

                    <div class="row">
                        <div class="element5 col-lg-4 col-md-4 col-sm-2">
                            <h5 class="type2">Brakes</h5>
                            <p class="car-desc">4 - Wheel ABS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
       <!-- Due Services section -->
       <DashDueServices/>
      
    <!-- History Section -->
        <DashHistory/>
      <!-- Recommendations -->
      <DashRecommendation/>
    
      <!-- Car Parts Section -->
      <DashCarParts/>

    <!-- Footer section -->
    <section id="dash-footer">
        <footer class="dash-footer-copyrights">
            <p class="dash-copyrights">&copy; Copyrights 2022. All Rights reserved.</p>
        </footer>
    </section>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { cars } from '../utils/car.js'
import DashDueServices from './DashDueServices.vue'
import DashHistory from './DashHistory.vue'
import DashRecommendation from './DashRecommendation.vue'
import DashCarParts from './DashCarParts.vue'
export default {
    name: 'Dashboard',
    components: {
        DashDueServices,
        DashHistory,
        DashRecommendation,
        DashCarParts
    },
    data: () => {
        return{
            cars
        }   
    }, 
    computed: {
        ...mapGetters({
            user : 'auth/user'
        })
    },
    methods:{
        myNewFunction() {
         this.$refs.dash.classList.toggle("showing");
        },
        addCarModal() {
         this.$refs.car.style.display = "block";
        },
        closeCarModal() {
         this.$refs.car.style.display = "none";
        },
        openModal() {
        this.$refs.modal.style.display = "block";
        },
         closeModal() {
         this.$refs.modal.style.display = "none";
        },
    }
}
</script>

<style lang="scss" scoped>
.dash-contain {
    padding: 0% 2% 0;
}

h2{
    font-size: 20px;
}

.dash-nav{   
 display: flex;
 background-color: #ffffff;
 justify-content: space-between;
 position: fixed;
 top: 0;
 width: 97%;
 max-height: 80px; 
 padding-top: 15px;
}

.nav-img{
    padding-left: 15px;
}

.drop-down{
    display: none;
    background-color: #ffffff;
    border-radius: 5px;
    position: absolute;
    top: 60px;
    right: 0;
    box-shadow: 0px 8px 16px 6px rgba(173, 173, 173, 0.2);
    z-index: 1;
}

.drop-down a {
    display: block;
    padding: 20px 30px;
    border-bottom: 1px solid rgb(238, 238, 238);
    text-decoration: none;
    color: #8C8C8C;
}

.drop-down a:last-child   {
    border-bottom: none;
}

.drop-down a:hover  {
    background-color: #97ffa6;
    color: #000;
}


.showing{
    display: block;
}

.mycar{
    display: flex;
    margin-top: 100px;
}

.mycar-top-title {
    font-size: 2rem;
    font-weight: 600;
}

.mycar-btn {
    background-color: #000;
    color: #fff;
    margin-left: auto;
}

.mycar-btn:hover {
    background-color: #444;
}

.mycar-btn2 {
    background-color: #53FF6E;
    color: #000;
    margin-left: 1%;
    padding: 10px 20px;
}

.mycar-btn2:hover {
    background-color: #09e62a;
}

.addCar-modal   {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 3rem auto;
    background-color: #ebebeb;
    padding: 50px;
    border-radius: 5px;
}

.addCar-modal select {
    padding: 10px 20px;
    margin-bottom: 40px;
}

.car-type-btn   {
    margin-top: 1rem;
    width: 150px;
    background-color: #000;
    color: #fff;
    padding: 15px 0;
}

.car-type-clsBtn    {
    color: #fff;
    font-size: 2rem;
    position: fixed;
    top: 2rem;
    left: 80rem;
    cursor: pointer;
}

.car-transparent-bg {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
}

.dash-mycar-details {
    margin: 2% 0;
    border: 1px solid #9d9d9d;
    border-radius: 10px;
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
}

.dash-mycar-details .car-name {
    margin: auto 0;
    font-size: 1.5rem;
}

.dash-mycar-details button {
    padding: 10px 30px;
    background-color: #53FF6E;
}

/* Dashboard Modal */
.transaprent-modal {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100%;
    padding: 50px;
    z-index: 10;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 1000ms ease-out;
}

.modal-container {
    background-color: #fff;
    border-radius: 10px;
    width: 80%;
    height: 85vh;
    margin: auto;
    text-align: center;
    overflow-y: scroll;
    padding: 50px;
    transition: all 500ms ease-in-out;
}

.scroller {
    scrollbar-width: none;
    scrollbar-color: #eee #fff;
}

.scroller::-webkit-scrollbar {
    width: 8px;
    background: #fff;
    border-radius: 0 50px 50px 0;
}

.scroller::-webkit-scrollbar-thumb {
    width: 8px;
    background: #eee;
}

.modal-close {
    margin: -1rem 0rem;
    font-size: 1.5rem;
    cursor: pointer;
    position: fixed;
    right: 15rem;
    transition: all 300ms ease-in-out;
}

.modal-close:hover {
    font-size: 2rem;
    cursor: pointer;
    color: #555;
}

.modal-container .car-name {
    font-size: 2.5rem;
    font-weight: 600;
    color: #545454;
}

.modal-container img {
    width: 300px;
    padding: 20px;
}

.element1 .type1, .element2 .type2, .element3 .type3, .element4 .type1, .element5 .type2 {
    font-weight: 600;
}

.modal-divider {
    background-color: #000;
    color: #000;
    height: 1px;
    margin: 2rem auto;
    width: 80%;
}

.modal-footer {
    text-align: center;
    margin: auto;
    display: block;
    margin: 2rem;
}


#dash-footer {
    background-color: #ebebeb;
    padding: 1% 5%;
}

.dash-footer-copyrights {
    text-align: center;
}

#dash-footer footer p {
    margin: auto;
    color: #777;
}

@media (max-width: 1300px) { 
    .car-type-clsBtn {
        left: 75rem;
    }

} 

@media (max-width: 1024px) { 
    .car-type-clsBtn {
        left: 60rem;
    }
}

@media (max-width: 768px) { 
     .car-type-clsBtn {
        left: 44rem;
    }
}

@media (max-width: 430px) { 
        #dash-nav {
        display: none;
    }

    .new-dash-nav {
        padding: 10px;
        background-color: #fff;
        color: #000;
        display: flex;
        justify-content: space-between;
    }

    .new-dash-nav .new-dashboard-title {
        font-size: 1.4rem;
        margin: auto 0;
        padding: 20px;
        font-weight: 600;
    }

    .new-dash-nav i.open-nav {
        font-size: 1.4rem;
        margin: auto 0;
        padding: 20px;
        cursor: pointer;
    }

    /* My Car section */
    #dash-myCar {
        padding: 7%;
    }

    .mycar-top-content {
        margin-bottom: 1rem;
    }

    .mycar-top-title {
        font-size: 1.3rem;
        margin: auto 0;
    }

    button.mycar-btn, button.mycar-btn2 {
        padding: 8px 13px;
        font-size: 0.7rem;
        border: none;
    }

    .dash-mycar-details {
        padding: 1rem;
        border-radius: 3px;
    }

    .dash-mycar-details .car-name {
        font-size: 1rem;
    }

    .dash-mycar-details button {
        padding: 8px 13px;
    }

    /* Add Car Modal */
    .car-type-clsBtn {
        font-size: 1.2rem;
        left: 24rem;
    }

    .car-type-btn {
        margin: 0.1rem auto;
        width: 240px;
        background-color: #000;
        color: #fff;
        padding: 10px 0;
    }

    /* My Car Type */
    .modal-container {
        border-radius: 5px;
        width: 100%;
        height: 50vh;
    }

    .modal-close {
        font-size: 1rem;
        right: 5rem;
    }

    .modal-close:hover {
        font-size: 1.4rem;
    }

    .modal-container .car-name {
        font-size: 1.5rem;
        font-weight: 600;
        color: #545454;
    }

    .modal-container img {
        width: 200px;
        padding: 10px;
    }

    .modal-divider {
        display: none;
    }

    /* Due Service */
    #dash-dueServices {
        padding: 5% 7%;
    }

    h1.dueservice-title {
        font-size: 1.3rem;
    }

    .dueservice-duedate-content {
        border-radius: 5px;
    }

    .day-remain .car-service-duedate {
        font-size: 1rem;
    }

    .day, .hour, .minute, .seconds {
        font-size: 1rem;
    }

    /* Other Services */
    .dash-other-services {
        margin: 3rem 0;
        padding: 2rem 0;
        border-radius: 5px;
    }
    .dash-other-services-title {
        font-size: 1.2rem;
        padding: 0 0 2rem;
    }

    /* History Section */
    #dash-history {
        padding: 2% 7%;
    }

    .history-top-title {
        font-size: 1.3rem;
    }

    .history-main-contents {
        border-radius: 5px;
    }

    .htry-btry-change .history-battery-change-title {
        font-size: 1rem;
    }

    .htry-oil-change .history-battery-change-title {
        font-size: 1rem;
    }

    .htry-body-repair .history-body-repair-title {
        font-size: 1rem;
    }

    .selected {
        width: 100px;
        padding: 10px 2px;
        font-size: 0.7rem;
    }

    /* Battery Modal Box */
    .battery-change-box {
        border-radius: 5px;
        top: -1rem;
    }

    .battery-change-box .product h5.product-name, .battery-change-box .done-transaction-box h5.done-transaction, .transaction-price, .product-type {
        font-size: 0.8rem;
    }

    .battery-change-box .status .transaction-status, .transaction-update{
        font-size: 1rem;
    }

    /* Recommendation Section */
    #dash-recommendations {
        padding: 10% 7%;
    }

    .recom-top-content-title {
        font-size: 1.3rem;
    }

    .recom-main-contents {
        border-radius: 5px;
    }

    .recom-btry-change-title, .recom-oil-change-title, .recom-ac-service-title, .recom-tyre-change-title {
        font-size: 1rem;
    }

    .recom-main-contents button {
        padding: 8px 10px;
        font-size: 0.8rem;
    }

    /* Recommendation Modal */
    .dash-recommendation-modal-container {
        margin: 2rem auto;
        top: 4rem;
        width: 100%;
        padding: 10px;
    }

    .recom-modal-close {
        font-size: 1.2rem;
        top: 1rem;
    }

    .product-recommended {
        font-size: 1rem;
    }

    /* Your Car Parts */
    #dash-carParts {
        padding: 10% 7%;
    }

    .carparts-top-content-title {
        font-size: 1.3rem;
    }

    .carparts-main-contents {
        border-radius: 5px;
        padding: 1.2rem 2rem;
    }

    .carparts-btry-title, .carparts-oil-title, .carparts-bumper-title {
        font-size: 1rem;
        margin: auto 0;
    }

    .battry-detail-btn, .oil-detail-btn, .bumper-detail-btn {
        padding: 8px 10px;
        font-size: 0.8rem;
    }

    .carparts-btry span {
        font-size: 0.4rem;
        left: 14.5rem;
        top:  123.5rem;
        padding: 0.2rem 0.3rem;
        color: #fff;
    }

    .closeDetail-btn {
        width: 80px;
        padding: 8px 6px;
        font-size: 0.6rem;
    }

    .product-name, .product-type, .product-amount{
        font-size: 0.7rem;
    }

    .product1 .product {
        font-size: 0.7rem;
    }

    .carPart-container {
        background-color: #fff;
        padding: 50px 10px 0;
    }

    /* Footer */
    .dash-copyrights {
        font-size: 0.7rem;
    }
}
</style>
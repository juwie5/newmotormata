<template>
   <div>
       <!-- Dash Navigation  -->
       <section class="dash-contain">
           <nav class="dash-nav">
               <div><img  class="nav-img" src="../assets/logo.png" alt="logo"></div>
               <div>
                   <h2 @click="myNewFunction()" class="userName"> {{user.username}} <img src="../assets/user-profile.png" alt="userProfile"> <font-awesome-icon icon="caret-down"/></h2>    
               </div>
               <div id="dashDropDown" class="drop-down">
                            <router-link to="/dashboard/profile"><font-awesome-icon icon="user-alt"/> Profile</router-link>
                            <router-link to="/dashboard/cart"><font-awesome-icon icon="shopping-bag"/> Cart</router-link>
                            <router-link to="/dashboard/messages"><font-awesome-icon icon="comment-alt"/> Messages</router-link>
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
            <button class="btn mycar-btn2" @click="addCarModal()">Add Car <font-awesome-icon icon="plus"/></button>
         </div>
         <div class="car-transparent-bg">
            <font-awesome-icon icon="times-circle" class="car-type-clsBtn" @click="closeCarModal()"/>
            <div class="addCar-modal">
                <label for="cars">What Kind of Car do you drive?</label>
                <select id="car-options" name="cars">
                    <option value="" disabled selected>Select your car name here</option>
                    <option value="acura">Acura</option>
                    <option value="astonmartin">Aston Martin</option>
                    <option value="audi">Audi</option>
                    <option value="bentley">Bentley</option>
                    <option value="bmw">BMW</option>
                    <option value="bugatti">Bugatti</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="chrysler">Chrysler</option>
                    <option value="ferrari">Ferrari</option>
                    <option value="ford">Ford</option>
                    <option value="geely">Geely</option>
                    <option value="honda">Honda</option>
                    <option value="hyundai">HyundaiS</option>
                    <option value="infiniti">Infiniti</option>
                    <option value="kia">Kia</option>
                    <option value="landRover">Land Rover</option>
                    <option value="lexus">Lexus</option>
                    <option value="benz">Mercedez Benz</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="nissan">Nissam</option>
                    <option value="tesla">Tesla</option>
                    <option value="toyota">Toyota</option>
                    <option value="ultima">Ultima</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="volvo">Volvo</option>
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
            <button class="btn" @click="openModal()">Details &nbsp;&nbsp;<font-awesome-icon icon="caret-down"/></button>
        </div>
        <!-- My Car Modal details -->
        <div class="transaprent-modal">
            <div class="modal-container scroller">
                <font-awesome-icon icon="times" class="modal-close" @click="closeModal()"/>
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
        <section id="dash-dueServices">
        <div class="dueservice-top-contents">
            <h2 class="dueservice-title">Due Services</h2>
        </div>

        <div class="dueservice-duedate-content">
            <div class="day-remain">
                <h3 class="car-service-duedate">Remaining days to due date</h3>
            </div>
            <div class="countdown">
                <div class="container-day">
                    <h3 class="day">Time</h3>
                    <p>Day</p>
                </div>
                <div class="container-hour">
                    <h3 class="hour">Time</h3>
                    <p>hour</p>
                </div>
                <div class="container-minute">
                    <h3 class="minute">Time</h3>
                    <p>minutes</p>
                </div>
                <div class="container-second">
                    <h3 class="seconds">Time</h3>
                    <p>seconds</p>
                </div>
            </div>
        </div>

        <!-- other Services -->
        <div class="dash-other-services">
            <h3 class="dash-other-services-title">Other Services</h3>
            <div class="dash-paper-renewal">
                <h1 class="paper-renewal-title">Paper Renewal</h1>
                <div class="d-p-renewal-content">
                    <p class="d-p-renewal-title">Next renewal date</p>
                    <p class="renewal-date">Sept. 20, 2024</p>
                </div>
            </div>

            <div class="dash-car-tyres">
                <h1 class="dash-car-tyres-title">Car Tyres</h1>
                <div class="dash-car-tyres-content">
                    <p class="dash-car-tyres-title2">Expiry Date</p>
                    <p class="renewal-date">Sept. 20, 2022</p>
                </div>
            </div>

            <div class="dash-break-pad">
                <h1 class="dash-break-pad-title">Break Pad</h1>
                <div class="dash-break-pad-content">
                    <p class="dash-break-pad-title2">Next renewal date</p>
                    <p class="renewal-date">Sept. 20, 2025</p>
                </div>
            </div>

            <button class="btn">Check all</button>
        </div>
    </section>
    <!-- History Section -->
     <section id="dash-history">
        <div class="history-top-content">
            <h2 class="history-top-title">History/Transactions</h2>
        </div>
        <div class="history-main-contents">


            <div class="select-box">
                <div class="options-container">
                    <div class="option">
                        <input type="radio" class="radio" id="today" name="category">
                        <label for="today">Today</label>
                    </div>

                    <div class="option">
                        <input type="radio" class="radio" id="lastweek" name="category">
                        <label for="lastweek">Last Week</label>
                    </div>

                    <div class="option">
                        <input type="radio" class="radio" id="lastmonth" name="category">
                        <label for="lastmonth">Last Month</label>
                    </div>

                    <div class="option">
                        <input type="radio" class="radio" id="thisyear" name="category">
                        <label for="thisyear">This Year</label>
                    </div>

                    <div class="option">
                        <input type="radio" class="radio" id="alltime" name="category">
                        <label for="alltime">All time</label>
                    </div>
                </div>
                <div class="selected">
                    Last month <i class="fas fa-caret-down"></i>
                </div>
            </div>

            <div class="htry-btry-change">
                <h4 class="history-battery-change-title">Battery Change</h4>
                <font-awesome-icon icon="caret-down" class="collapsible-icon" @click="dissolveContainerDetails()"/>
                <font-awesome-icon icon="caret-up" class="collapsible-icon-close" @click="closeContainerDetails()"/>
            </div>

            <!-- Battery Change Contents -->
            <div class="content battery-change-box">
                <p class="btc-box-date">September 21, 2021</p>
                <div class="done-transaction-box">
                    <h5 class="done-transaction">Battery Change</h5>
                    <span class="transaction-price">N30,000.00</span>
                </div>

                <div class="product">
                    <h5 class="product-name">Battery Type</h5>
                    <span class="product-type">Rocket Car Battery - Korea Original - 12v/75ah</span>
                </div>

                <div class="status">
                    <h5 class="transaction-status">Status</h5>
                    <span class="transaction-update">Completed</span>
                </div>
            </div>

            <div class="htry-oil-change">
                <h4 class="history-battery-change-title">Oil Change</h4>
                <font-awesome-icon icon="caret-down"/>
            </div>

            <div class="htry-body-repair">
                <h4 class="history-body-repair-title">Body Repair</h4>
                <font-awesome-icon icon="caret-down"/>
            </div> 
        </div> 
    </section>
      <!-- Recommendations -->
    <section id="dash-recommendations">
        <div class="recom-top-content">
            <h2 class="recom-top-content-title">Recommendations</h2>
            <div class="recom-main-contents">
                <div class="recom-btry-change">
                    <h4 class="recom-btry-change-title">Battery Change</h4>
                    <button class="btn" @click="openRecommendationModal()">Book now</button>
                </div>

                <!-- Recom Modal -->
                <div class="dash-recommendation-modal">
                    <div class="dash-recommendation-modal-container scroller">
                        <font-awesome-icon icon="times" class="recom-modal-close" @click="closeRecommendationModal()"/>
                        <div class="recom-product">
                            <h2 class="product-recommended">Buy new Battery</h2>
                            <button class="btn recom-cart-btn">Add to Cart</button>
                        </div>
                        <div class="recom-divider"></div>
                        <div class="recom-product">
                            <h2 class="product-recommended">Fix Current Battery</h2>
                            <button class="btn recom-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="recom-oil-change">
                    <h4 class="recom-oil-change-title">Oil Change</h4>
                    <button class="btn">Book now</button>
                </div>
                <div class="recom-ac-service">
                    <h4 class="recom-ac-service-title">Body Repair</h4>
                    <button class="btn">Book now</button>
                </div>
                <div class="recom-tyre-change">
                    <h4 class="recom-tyre-change-title">Body Repair</h4>
                    <button class="btn">Book now</button>
                </div>
            </div>
        </div>
    </section>
      <!-- Car Parts Section -->
    <section id="dash-carParts">
        <div class="carparts-top-content">
            <h2 class="carparts-top-content-title">Your Car Parts</h2>
            <div class="carparts-main-contents">
                <div class="carparts-btry">
                    <h4 class="carparts-btry-title">Battery (2m Capacity)</h4>
                    <span class="newLabel">New</span>
                    <button class="btn battry-detail-btn" @click="openDetails()">Details <font-awesome-icon
                            icon="caret-down"/></button>
                    <button class="btn closeDetail-btn" @click="closeDetails();">Close <font-awesome-icon icon="times"/></button>
                </div>

                <!-- Details Container hidden -->
                <div class="carPart-container">
                    <div class="product1">
                        <div class="left-alignment">
                            <h5 class="product-name">Name</h5>
                            <p class="product">Battery (2m Capacity)</p>
                        </div>
                        <div class="middle-alignment">
                            <h5 class="product-type">Type</h5>
                            <p class="product">Rocket Car Battery - Korea Original - 12v/75ah</p>
                        </div>
                        <div class="right-alignment">
                            <h5 class="product-amount">Amount</h5>
                            <p class="product">&#8358; 28,200.00</p>
                        </div>
                    </div>
                    <button class="btn product-details-btn">Add to Cart</button>
                </div>

                <div class="carparts-tyres">
                    <h4 class="carparts-oil-title">Oil Change</h4>
                    <button class="btn oil-detail-btn">Details <font-awesome-icon icon="caret-down"/></button>
                </div>
                <div class="carparts-bumper">
                    <h4 class="carparts-bumper-title">Bumper</h4>
                    <button class="btn bumper-detail-btn">Details <font-awesome-icon icon="caret-down"/></button>
                </div>
            </div>
        </div>
    </section>

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
export default {
    name: 'Dashboard',
    computed:{
        ...mapGetters({
            authenticated : 'auth/authenticated',
            user: 'auth/user'
        })    
    },
    data: () => {
        return{

        }
    }, 
    methods:{
        myNewFunction() {
          document.getElementById("dashDropDown").classList.toggle("showing");
        },
        addCarModal() {
         document.querySelector(".car-transparent-bg").style.display = "block";
        },
        closeCarModal() {
         document.querySelector(".car-transparent-bg").style.display = "none";
        },
        openModal() {
         document.querySelector(".transaprent-modal").style.display = "block";
        },
         closeModal() {
         document.querySelector(".transaprent-modal").style.display = "none";
        },
        dissolveContainerDetails() {
        document.querySelector(".battery-change-box").style.display = "block";
        document.querySelector(".collapsible-icon").style.display = "none";
        document.querySelector(".collapsible-icon-close").style.display = "block";
        },
        closeContainerDetails() {
        document.querySelector(".battery-change-box").style.display = "none";
        document.querySelector(".collapsible-icon").style.display = "block";
        document.querySelector(".collapsible-icon-close").style.display = "none";
        },
        openDetails() {
         document.querySelector(".carPart-container").style.display = "block";
         document.querySelector(".battry-detail-btn").style.display = "none";
         document.querySelector(".closeDetail-btn").style.display = "block";
        },
         closeDetails() {
          document.querySelector(".carPart-container").style.display = "none";
          document.querySelector(".battry-detail-btn").style.display = "block";
          document.querySelector(".closeDetail-btn").style.display = "none";
        },
        openRecommendationModal() {
         document.querySelector(".dash-recommendation-modal").style.display = "block";
        },
         closeRecommendationModal() {
            document.querySelector(".dash-recommendation-modal").style.display = "none";
        }

   
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

/* Due Services */
#dash-dueServices {
    padding: 2% 4%;
}

.dueservice-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3%;
}

.dueservice-duedate-content {
    border: 1px solid #9d9d9d;
    max-width: 100%;
    border-radius: 10px;
    padding: 2rem 2rem;
    text-align: center;
}

.day-remain h3 {
    font-size: 2rem;
    margin-bottom: 3rem;
}

.countdown {
    display: flex;
    justify-content: space-around;
}

.day, .hour, .minute, .seconds {
    font-size: 3rem;
}

/* Other Services */
.dash-other-services {
    border: 1px solid #9d9d9d;
    max-width: 100%;
    margin: 2rem 0;
    border-radius: 10px;
    padding: 3% 5%;
}

.dash-other-services-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
}

.dash-paper-renewal {
    margin: 5% 0;
}

.paper-renewal-title {
    font-weight: 600;
    font-size: 1rem;
}

.d-p-renewal-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(247, 247, 247);
    /* box-shadow: 0px 8px 16px 6px rgba(126, 126, 126, 0.2); */
    padding: 10px 20px;
    margin: 3% 0;
}

.d-p-renewal-title {
    margin: auto 0;
}

.renewal-date {
    color: #888;
    margin: auto 0;
}


/* Car Tyres */

.dash-car-tyres {
    margin: 5% 0;
}

.dash-car-tyres-title {
    font-weight: 600;
    font-size: 1rem;
}

.dash-car-tyres-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(247, 247, 247);
    /* box-shadow: 0px 8px 16px 6px rgba(126, 126, 126, 0.2); */
    padding: 10px 20px;
    margin: 3% 0;
}

.dash-car-tyres-title2 {
    margin: auto 0;
}

.renewal-date {
    color: #888;
    margin: auto 0;
}

/* Break Pad */
.dash-break-pad {
    margin: 5% 0;
}

.dash-break-pad-title {
    font-weight: 600;
    font-size: 1rem;
}

.dash-break-pad-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(247, 247, 247);
    /* box-shadow: 0px 8px 16px 6px rgba(126, 126, 126, 0.2); */
    padding: 10px 20px;
    margin: 3% 0;
}

.dash-break-pad-title2 {
    margin: auto 0;
}

.renewal-date {
    color: #888;
    margin: auto 0;
}

.dash-other-services button {
    margin: auto;
    color: #fff;
    background-color: #000;
    width: 200px;
    padding: 10px;
}

.dash-other-services button:hover {
    background-color: #222;
}
#dash-history {
    padding: 2% 4%;
}

.history-top-title {
    font-size: 2rem;
    font-weight: 600;
}

.history-main-contents {
    margin: 2% 0;
    border: 1px solid #9d9d9d;
    border-radius: 10px;
    padding: 1.2rem 2rem;
}

.history-btn {
    background-color: transparent;
    border: 1px solid #000;
    padding: 10px 20px;
    margin: 1% 0 0;
}

.select-box {
    display: flex;
    width: 150px;
    flex-direction: column;
}

.selected {
    background: transparent;
    border: 1px solid #555;
    border-radius: 5px;
    position: relative;
    order: 0;
    margin-bottom: 10px;
}

.selected i {
    display: none;
}

.select-box .options-container {
    background: #eee;
    max-height: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
    border-radius: 5px;
    overflow: hidden;
    order: 1;
}

.select-box .options-container.active {
    max-height: 200px;
    opacity: 1;
    overflow-y: scroll;
}

.select-box .options-container.active+.selected i {
    transform: rotateX(180deg);
    top: 17px;
}

.select-box .options-container::-webkit-scrollbar {
    width: 0;
    scrollbar-width: 1px;
    border-radius: 0 5px 5px 0;
}

.select-box .options-container {
    scrollbar-width: none;
    scrollbar-color: #eee #fff;
}

.select-box .option, .selected {
    padding: 12px 24px;
    cursor: pointer;
}

.select-box .option:hover {
    background: #ddd;
}

.select-box label {
    cursor: pointer;
}

.select-box .option .radio {
    display: none;
}

.htry-btry-change {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    margin: 4% 0;
}

.htry-oil-change {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    margin: 4% 0;
}

.htry-body-repair {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    margin: 4% 0;
}

/* The hidden box */
.htry-btry-change i {
    cursor: pointer;
    transition: all 00ms ease-in-out;
}

.htry-btry-change i.collapsible-icon-close {
    cursor: pointer;
    transition: all 00ms ease-in-out;
    display: none;
}

.battery-change-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 10px #ddd;
    position: relative;
    top: -3rem;
    display: none;
}

.battery-change-box .btc-box-date {
    color: #aaa;
}

.battery-change-box .done-transaction-box {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
}

.battery-change-box h5.done-transaction {
    font-weight: 600;
}

.battery-change-box .product h5.product-name {
    font-weight: 600;
}

.battery-change-box .product {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
}

.battery-change-box .status {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
}

.transaction-status {
    margin: auto 0;
    font-weight: 600;
}

/* Recommendations */
#dash-recommendations {
    padding: 2% 4%;
}

.recom-top-content-title {
    font-size: 2rem;
    font-weight: 600;
}

.recom-main-contents {
    margin: 2% 0;
    border: 1px solid #9d9d9d;
    border-radius: 10px;
    padding: 1.2rem 2rem;
}

.recom-btry-change {
    border-bottom: 1px solid #ececec;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
}

.recom-oil-change {
    border-bottom: 1px solid #ececec;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
}

.recom-ac-service {
    border-bottom: 1px solid #ececec;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
}

.recom-tyre-change {
    border-bottom: 1px solid #ececec;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
}

.recom-main-contents button {
    background-color: #53FF6E;
    padding: 10px 30px;
}

/* Recommendation modal */
.dash-recommendation-modal {
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh;
    width: 100%;
    padding: 50px;
    z-index: 10;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
}

.dash-recommendation-modal-container {
    background-color: #fff;
    padding: 40px;
    margin: 2rem;
    position: relative;
    top: 4rem;
    border-radius: 5px;
}

.recom-modal-close {
    position: absolute;
    right: 2rem;
    top: 1.5rem;
    cursor: pointer;
    font-size: 2rem;
}

.recom-product {
    display: flex;
    justify-content: space-between;
    margin: 2rem;
}

.product-recommended {
    font-size: 1.5rem;
    margin: auto 0;
}

.recom-divider {
    border-bottom: 1px solid #eee;
}

/* Car parts */
#dash-carParts {
    padding: 2% 4%;
}

.carparts-top-content-title {
    font-size: 2rem;
    font-weight: 600;
}

.carparts-main-contents {
    margin: 2% 0;
    border: 1px solid #9d9d9d;
    border-radius: 10px;
    padding: 1.2rem 2rem;
}

.carparts-btry {
    border-bottom: 1px solid #ececec;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
}

.carparts-btry span {
    position: absolute;
    left: 23rem;
    background-color: red;
    padding: 0.2rem 1rem;
    color: #fff;
}

.carparts-tyres {
    border-bottom: 1px solid #ececec;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
}

.carparts-bumper {
    border-bottom: 1px solid #ececec;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
}

.battry-detail-btn, .oil-detail-btn, .bumper-detail-btn {
    background-color: #53FF6E;
    padding: 10px 30px;
}

/* Car Parts Details */
.carPart-container {
    background-color: #fff;
    padding: 50px;
    position: relative;
    top: -1rem;
    display: none;
    box-shadow: 0 10px 10px 2px rgba(170, 170, 170, 0.2);
}

.product1 {
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.product-name, .product-type, .product-amount {
    font-weight: 600;
}

.product-details-btn {
    background-color: #000;
    color: #fff;
    padding: 10px 30px;
    margin: 5rem 0 0 58.5rem;
}

.closeDetail-btn {
    background-color: #f00;
    color: #fff;
    padding: 10px 10px;
    width: 100px;
    display: none;
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






</style>
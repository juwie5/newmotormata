<template>
    <div>
        <Navbar class="container-fluid"/>
        <section class="contain">
            <div>
             <h2>Spares & Repairs</h2>
            </div>
            <div class="main-body">
              <div>
                    <div class="body">
                    <div>
                    <img class="carser" src="../assets/front.jpg" alt="">
                    </div>
                    <div class="main">
                    <div class="main-serv">
                        <h3>Front Shock Absorber Replacement</h3>
                        <div class="hrs">
                        <p><font-awesome-icon icon="clock"/> Takes 6 Hours</p>
                        </div>
                    </div>
                    <div>
                        <div>
                        <ul class="main-ul">
                            <li>1 Month Warranty</li>
                            <li>Free Pick-up/Drop</li> 
                        </ul>
                        </div>
                        <div class="main-content">
                        <p><font-awesome-icon class="icon" icon="check-circle"/> Shocker Strut / Damper OES Replacement ( Single Unit )</p>
                        <p><font-awesome-icon  class="icon" icon="check-circle"/> Opening & Fitting of Front Shock Absorber</p>
                        <p><font-awesome-icon  class="icon" icon="check-circle"/> Shocker Mount, Shocker Coil Spring Additional Charges</p>
                        <p><font-awesome-icon class="icon" icon="check-circle"/> Free Pickup & Drop</p>
                        </div>
                      
                    </div>
                </div>
          </div>
             </div>
             <div>
                    <div class="body">
                    <div>
                    <img class="carser" src="../assets/rear.jpg" alt="">
                    </div>
                    <div class="main">
                    <div class="main-serv">
                        <h3>Rear Shock Absorber Replacement</h3>
                        <div class="hrs">
                        <p><font-awesome-icon icon="clock"/> Takes 6 Hours</p>
                        </div>
                    </div>
                    <div>
                        <div>
                        <ul class="main-ul">
                            <li>1 Month Warranty</li>
                            <li>Free Pick-up/Drop</li> 
                        </ul>
                        </div>
                        <div class="main-content">
                        <p><font-awesome-icon class="icon" icon="check-circle"/>Shocker Strut / Damper OES Replacement ( Single Unit )</p>
                        <p><font-awesome-icon  class="icon" icon="check-circle"/> Opening & Fitting of Rear Shock Absorber</p>
                        <p><font-awesome-icon  class="icon" icon="check-circle"/> Shocker Mount, Shocker Coil Spring Additional Charges</p>
                        <p><font-awesome-icon class="icon" icon="check-circle"/> Free Pickup & Drop</p>
                        </div>
                        
                    </div>
                </div>
          </div>
             </div>
             <div>
                    <div class="body">
                    <div>
                    <img class="carser" src="../assets/tyre.jpg" alt="">
                    </div>
                    <div class="main">
                    <div class="main-serv">
                        <h3>Tryes Repacement</h3>
                        <div class="hrs">
                        <p><font-awesome-icon icon="clock"/> Takes 6 Hours</p>
                        </div>
                    </div>
                    <div>
                        <div>
                        <ul class="main-ul">
                            <li>Tubeless</li>
                            <li>5 years warranty</li> 
                        </ul>
                        </div>
                        <div class="main-content">
                        <p><font-awesome-icon class="icon" icon="check-circle"/>Free Pickup & Drop</p>
                        <p><font-awesome-icon  class="icon" icon="check-circle"/>Tyre Replacement at Service Center</p>
                        <p><font-awesome-icon  class="icon" icon="check-circle"/> Alignment & Wheel Balancing </p>
                        </div>
                        
                    </div>
                </div>
          </div>
             </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>


<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    name: 'Repairs',
    components: {
        Navbar,
        Footer
    },
    data: ()=>{
        return{

        }
    }
}
</script>


<style lang="scss" scoped>

    @import '@/styles/services';

</style>
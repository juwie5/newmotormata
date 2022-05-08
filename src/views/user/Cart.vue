<template>
    <div class="contain" v-if="!show">
        <section>
            <h2 class="h2-text">Review & Checkout</h2>
            <div class="order-menu">
                <div class="ord-item">
                    <h4 class="h4-text">Order Service</h4>
                    <h4 class="h4-text ord-p">Price</h4>
                </div>
                <div class="ord-item brd">
                    <h4 class="h4-text">Basic Service</h4>
                    <h4 class="h4-text">N20,000 <font-awesome-icon class="times" icon="times"/></h4>
                </div>
                 <div class="ord-item brd">
                    <h4 class="h4-text">Battery</h4>
                    <h4 class="h4-text">N20,000 <font-awesome-icon class="times" icon="times"/></h4>
                </div>
                <div class="ord-item btn">
                    <button class="btn-chk">Continue Shopping</button>
                    <button class="btn-chk btn-emp"><font-awesome-icon class="trash" icon="trash"/>Empty Cart </button>
                </div>
            </div>
            <div class="bill">
                <h2 class="h2-text">Billing Details</h2>
                <div> 
                    <h4>Name:</h4>
                    <p>Emmanuel Adesanya</p>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>5, Akinsanya Street, Agbowo, UI, Ibadan</p>
                </div>
                <div>
                    <h4>Shipping Address <img src="../../assets/edit.svg"></h4>
                    <p>5, Akinsanya Street, Agbowo, UI, Ibadan</p>
                </div>
            </div>
        </section>
        <section>
            <div class="sum-sect">
                <h5 class="sum-text">Order Summary</h5>
                  <div class="ord-item brd-2">
                    <h4 class="sum-text">Basic Service</h4>
                    <h4 class="sum-text">N20,000 <font-awesome-icon class="times" icon="times"/></h4>
                </div>
                 <div class="ord-item brd-2"> 
                    <h4 class="sum-text">Battery</h4>
                    <h4 class="sum-text">N20,000 <font-awesome-icon class="times" icon="times"/></h4>
                </div>
                <div class="sum-tot">
                    <p class="sum-p">Total Due Today</p>
                    <h2 class="sum-h2">N40,000.00</h2>
                </div>
                <button @click="showInvoice()" class="btn-chk chk">Checkout</button>
            </div>
            <p class="last-p">By Continuing, I agree with all  <span class="green"> Terms </span> & <br/> <span class="green">Policies </span> of Motormata</p>
        </section>
    </div>
    <div class="contain" v-else>
        <section>
            <h2>Invoice  #934210</h2>
            <div class="order-menu">
                <div class="ord-item">
                    <h4 class="h4-text">Description</h4>
                    <h4 class="h4-text ord-p">Amount</h4>
                </div>
                <div class="ord-item">
                    <h4 class="h4-text">Basic Service</h4>
                    <h4 class="h4-text ord-p">N20,000</h4>
                </div>
                  <div class="ord-item">
                    <h4 class="h4-text">Battery</h4>
                    <h4 class="h4-text ord-p">N20,000</h4>
                </div>
                <div> 
                    <h4>Name:</h4>
                    <p>Emmanuel Adesanya</p>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>5, Akinsanya Street, Agbowo, UI, Ibadan</p>
                </div>
                <div>
                    <h4>Shipping Address</h4>
                    <p>5, Akinsanya Street, Agbowo, UI, Ibadan</p>
                </div>
            </div>
        </section>
        <section>
            <div class="sum-sect">
                <div class="sum-tot">
                    <h2 class="sum-h2">N40,000.00</h2>
                    <button id="pay-btn" class="btn-chk chk">Pay with Paystack</button>
                    <button  class="btn-chk chk">Pay with Paga</button>
                    <button  class="btn-chk chk">Pay with Flutterwave</button>
                    <button  id="bank-btn" class="btn-chk chk">Bank Transfer</button>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    name: 'Cart',
    data:  () => {
        return{
            show: false,
        }
    },
    methods:{
        showInvoice(){
          return this.show =  true
        }
    }
}
</script>

<style scoped lang="scss">
.contain{
    padding: 3% 7% 0;
    display: flex;
    justify-content: space-around;
}

.h2-text{
    font-weight: 400;
}

.order-menu{
    width: 650px;
    padding: 15px;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
}

.ord-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.ord-p{
    margin-right: 45px;
}

.brd{
    border-bottom: 1px solid #000000;
}
.brd-2{
    border-bottom: 1px solid #00EF26;
    margin-bottom: 25px;
}

.btn{
    margin-top: 20px;
}

.btn-chk{
    width: 180px;
    padding: 5px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    background-color: #000000;
    color: #fff;
}

.chk {
    width: 270px;
    margin-bottom: 10px;
}

.btn-emp{
    background-color: #fff;
    color: #000000;
    border: 1px solid #000000;
}

.h4-text{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    font-style: normal;
}
.times{
    font-size: 16px;
    margin-left: 20px;
}
.trash{
    font-size: 16px;
    margin-right: 10px;
}
.bill{
    margin-top: 20px;
}

.sum-sect{
    width: 350px;
    margin-top: 45px;
    background-color: #53FF6E;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
}
.sum-text{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
}

.sum-tot{
    margin: 35px 0;
}

.sum-p{
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
    margin: 0;
}

.sum-h2{
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
}

.last-p{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-top: 10px;
}

.green{
    color: #53FF6E;
}

#pay-btn{
    background-color:  #0077BA;;
}

#bank-btn{
    background-color: #C1C1C1;
;
}
</style>
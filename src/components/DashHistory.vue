<template>
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
                <font-awesome-icon icon="caret-down" class="collapsible-icon" ref="collapsible" @click="dissolveContainerDetails" v-show="show"/>
                <font-awesome-icon icon="caret-up" class="collapsible-icon-close" ref="collapsibleClose" @click="closeContainerDetails"  v-show="hide"/>
            </div>

            <!-- Battery Change Contents -->
            <div class="content battery-change-box" ref="batterychange">
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
</template>

<script>
    export default {
        name: 'DashHistory',
        data: () => {
            return{
               hide: false,
               show: true
            }
        },
        methods:{
         dissolveContainerDetails() {
            this.$refs.batterychange.style.display = "block";
            this.hide = true 
            this.show= false
          
        },
        closeContainerDetails() {
            this.$refs.batterychange.style.display = "none";
            this.hide = false 
            this.show= true
        }
        }
    }
</script>

<style lang="scss" scoped>

/*Dash History */
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
</style>
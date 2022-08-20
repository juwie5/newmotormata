<template>
        <section id="dash-carParts">
        <div class="carparts-top-content">
            <h2 class="carparts-top-content-title">Your Car Parts</h2>
            <div class="carparts-main-contents">
                <div class="carparts-btry">
                    <h4 class="carparts-btry-title">Battery (2m Capacity)</h4>
                    <span class="newLabel">New</span>
                    <button class="btn battry-detail-btn" ref="battry" @click="openDetails">Details <font-awesome-icon icon="caret-down"/></button>
                    <button class="btn closeDetail-btn" ref="close" @click="closeDetails" v-show="show">Close <font-awesome-icon icon="times"/></button>
                </div>

                <!-- Details Container hidden -->
                <div class="carPart-container" ref="carpart">
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

</template>

<script>
    export default {
        name: 'DashCarParts',
        data: () => {
            return {
                show: false
            }
        },
        methods:{
        openDetails() {
            this.$refs.carpart.style.display = "block";
            this.$refs.battry.style.display = "none";
            this.$refs.close.style.display = "block";
        },
         closeDetails() {
         this.$refs.carpart.style.display = "none";
          this.$refs.battry.style.display  = "block";
          this.$refs.close.style.display = "none";
        }
        }
    }
</script>

<style>
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

</style>
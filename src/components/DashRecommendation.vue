<template>
    <section id="dash-recommendations">
        <div class="recom-top-content">
            <h2 class="recom-top-content-title">Recommendations</h2>
            <div class="recom-main-contents">
                <div class="recom-btry-change">
                    <h4 class="recom-btry-change-title">Battery Change</h4>
                    <button class="btn" @click="openRecommendationModal">Book now</button>
                </div>

                <!-- Recom Modal -->
                <div class="dash-recommendation-modal" ref="dashmodel">
                    <div class="dash-recommendation-modal-container scroller">
                        <font-awesome-icon icon="times" class="recom-modal-close" @click="closeRecommendationModal"/>
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
</template>

<script>
    export default {
        name: 'DashRecommendation',
        data: () =>{
            return {

            }
        },

        methods: {
        openRecommendationModal() {
            this.$refs.dashmodel.style.display = "block";
        },
         closeRecommendationModal() {
            this.$refs.dashmodel.style.display = "none";
        },
    
        }

    }
</script>

<style lang="scss" scoped>
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

</style>
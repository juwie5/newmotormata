<template>
    <div>
       <section class="messages">
           <div>
               <article>
                   <p class="mes-text">Your car is due for service, you need to start preparing for the next servicing.</p>

                    <p class="mes-text"> Kindly Contact us as soon as possible to get our engineer across to you for the servicing. 
                    Remember you need to service you car when due to avoid faults, and future problems. </p>

                   <p class="mes-text"> We would be expecting your feedback before the due date.</p>
               </article>
               <p class="footnotes">Sept 20, 2022 10:25am</p>
               <article>
                   <p class="mes-text p-mar"><img src="../../assets/red-dot.svg"> The new battery you ordered for is now available. Kindly get back to us....</p>
               </article>
                <p class="footnotes">Sept 20, 2022 10:25am</p>
               <article>
                   <p class="last-p p-mar">Your purchase is on its way to you now.</p>
               </article>
                <p class="footnotes">Sept 20, 2022 10:25am</p>
           </div>
       </section>
    </div>
</template>

<script>
export default {
    name:'Messages',
    data: () =>{
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.messages{
    width: 69%;
    padding: 3% 0 0 6%;
}

article{
    background-color: #F5F5F5;
    padding: 15px 20px;
    border-radius: 3px;
}

.mes-text{
    font-weight: 500;
    font-size: 18px;
    // line-height: 21px;
    color: #5E5E5E;
   
}
.p-mar{
    margin-bottom: 0;
}
.last-p{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #8C8C8C;
}

.red-dot{
    color: red;
    width: 100%;
}
.footnotes{
    margin: 0 0 20px 525px;
    font-style: italic;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #CCCCCC;
}

@media only screen and (min-width: 320px) and (max-width: 430px) {
    article{
        margin-left: 10px;
    }
    .messages{
        width: 100%
    }
    .footnotes{
        margin: 0 10px 10px 10px;
    }

    .footnotes:last-child{
        margin-bottom: 50px;
    }


}
</style>
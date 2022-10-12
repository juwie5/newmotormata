<template>
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
                    <h3 class="day">{{textDay}}</h3>
                    <p>Day</p>
                </div>
                <div class="container-hour">
                    <h3 class="hour">{{textHour}}</h3>
                    <p>hour</p>
                </div>
                <div class="container-minute">
                    <h3 class="minute">{{textMinute}}</h3>
                    <p>minutes</p>
                </div>
                <div class="container-second">
                    <h3 class="seconds">{{textSecond}}</h3>
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
</template>

<script>
 export default {
    name: 'DashDueServices',
    data: () =>{
        return{
            textDay: '',
            textHour: '',
            textMinute: '',
            textSecond:'',
        }
    },
    methods:{
     countdown(){
         const countDate = new Date("January 1,2022 00:00:00").getTime()
         const now = new Date().getTime()
         const gap = countDate - now
         
         const seconds = 1000
         const minute = seconds * 60
         const hour = minute * 60
         const day = hour * 24

        this.textDay = Math.floor(gap / day)
        this.textHour = Math.floor((gap % day) / hour)
        this.textMinute = Math.floor((gap % hour) / minute)
        this.textSecond = Math.floor((gap % minute) / seconds) 
        },  
    },
    mounted(){
        setInterval(this.countdown, 1000)
    },
 }
</script>

<style lang="scss" scoped>

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

</style>
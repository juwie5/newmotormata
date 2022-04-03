<template>
    <div>
        <div class="sec">
             <router-link  class="sec-link" to="#">Change Password</router-link>
             <router-link  class="sec-link2" to="#">Two factor authentication</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Security',
    data: () =>{
        return{

        }
    }
}
</script>

<style lang="scss" scoped>

.sec{
    display: flex;
}

.sec-link{
    margin: 80px 25px 0 0;
    background: #C4C4C4;
    border-radius: 3px;
    padding: 11px 46px;
    color: #000;
    text-decoration: none;
}

.sec-link2{
    margin-top: 80px;
    border-radius: 3px;
    padding: 11px 46px;
    color: #000;
    text-decoration: none;
    border: 1px solid #000000;
    box-sizing: border-box;

}



</style>
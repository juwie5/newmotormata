<template>
<div>
    <section class="set-panel">
        <div class="sets">
            <p>Notification Settings</p><font-awesome-icon class="caret" icon="caret-down"/>
        </div>
        <div class="sets">
            <p>Account Settings</p><font-awesome-icon class="caret" icon="caret-down"/>
        </div>
        <div class="sets">
            <p>Language Settings</p><font-awesome-icon  class="caret" icon="caret-down"/>
        </div>
        <div class="sets">
            <p>Theme Settings</p><font-awesome-icon  class="caret" icon="caret-down"/>
        </div>
        <button class="del">Delete my Account</button>
    </section>
</div>
</template>

<script>
export default {
    name: 'Settings',
    data: () => {
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.set-panel{
    width: 700px;
    margin-top: 40px;
}
.sets{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #CDCDCD;
    margin-bottom: 30px;
}

.caret{
    vertical-align: center;
}


.del{
    width: 245px;
    height: 49px;
    background-color:#FF0000;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 3px;
}

@media only screen and (min-width: 320px) and (max-width: 430px) {
    .set-panel{
        width: 100%;
    }

}
</style>
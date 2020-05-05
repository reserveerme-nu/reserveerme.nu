<template>
    <b-col cols="" id="mainDiv">
        <b-row id="titleDiv">
            <b-col cols="9">
                <h1>Free meeting rooms</h1>
            </b-col>
            <b-col cols="1">
            </b-col>
        </b-row>
        <digital-clock id="digiclock"></digital-clock>
        <img src="@/assets/Fontys-Logo.png" height="100" width="160"  alt="Fontys Logo" id="logo"/>
    </b-col>
</template>

<script>
    import DigitalClock from "vue-digital-clock";

    export default {
        name: "FreeRooms",
        components: {
            DigitalClock
        }
    }
</script>

<style scoped>
    p{
        color: white;
        font-family: "Open Sans", serif;
        font-size: 22px;
        float: left;
        padding-right: 25px;
    }
    h1{
        color: white;
        font-family: 'Rokkitt', serif;
        font-size: 100px;
        float: left;
    }
    button{
        color: #009ddc;
        font-family: 'Rokkitt', serif;
        font-size: 30px;
        padding-left: 15px;
        padding-right: 15px;
        margin: 20px 20px 20px 0px;
        background: #ffffff;
        border: solid medium #ffffff;
    }
    #mainDiv{
        background-color: #009ddc;
        height: 100vh;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 10px;
    }
    #logo{
        position: absolute;
        bottom: 40px;
        right: 60px;
        float: right;
    }
    #digiclock{
        color: white;
        font-size: 70px;
        font-family: "Open Sans", serif;
        font-weight: 300;
        position: absolute;
        top: 20px;
        right: 60px;
        float: right;
    }
</style>
<template>
    <b-col cols="9" id="mainDiv">
        <b-row id="titleDiv">
            <b-col cols="10">
                <h1>{{roomInfo.roomName}}</h1>
            </b-col>
            <b-col cols="2">
                <digital-clock id="digiclock"></digital-clock>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p id="floor">{{roomInfo.roomFloor}} Floor</p>
                <p id="size">{{roomInfo.roomSize}} Persons</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h2 id="status">LOADING</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <H4>Please wait</H4>
            </b-col>
        </b-row>

        <img src="../../assets/loading.gif" height="100" width="100"  alt="Fontys Logo" id="logo"/>
    </b-col>
</template>

<script>
    import DigitalClock from "vue-digital-clock";

    export default {
        props:['roomInfo'],
        name: "Loading",
        components: {
            DigitalClock
        },
        data() {
            return{

            }
        }
    }
</script>

<style scoped>
    p{
        color: #646464;
        font-family: "Open Sans", serif;
        font-size: 22px;
        float: left;
        padding-right: 25px;
    }
    h1{
        color: #646464;
        font-family: 'Rokkitt', serif;
        font-size: 100px;
        float: left;
    }
    h2, h3{
        font-family: 'Rokkitt', serif;
        color: #646464;
    }
    h4{
        color: #646464;
        font-family: "Open Sans", serif;
        font-size: 50px;
        font-weight: 300;
    }

    #logo{
        position: absolute;
        bottom: 40px;
        right: 60px;
        float: right;
    }
    #digiclock{
        color: #646464;
        float: right;
        font-size: 70px;
        font-family: "Open Sans", serif;
        font-weight: 300;
    }
    #status{
        float: none;
        font-size: 200px;
        padding-top: 100px;
        height: 320px;
    }
    #titleDiv{
        height: 100px;
    }
    #mainDiv{
        background-color: #ffffff;
        height: 100vh;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 10px;
    }


</style>
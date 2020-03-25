<template>
    <b-col cols="9" id="mainDiv">
        <b-row id="titleDiv">
            <b-col cols="10">
                <h1>Asimov</h1>
            </b-col>
            <b-col cols="2">
                <digital-clock id="digiclock"></digital-clock>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p>4th Floor</p>
                <p>4 Persons</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h2 id="status">RESERVED</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <H4>by Xander Steinmann</H4>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <H4>until 14:45</H4>
            </b-col>
        </b-row>
        <b-row>
            <button type="button" style="margin: 20px auto;">FIND A FREE ROOM</button>
        </b-row>
        <b-row>
            <button type="button">END</button>
        </b-row>
        <b-row>
            <button type="button">EXTEND</button>
        </b-row>
        <img src="@/assets/Fontys-Logo.png" height="100" width="160"  alt="Fontys Logo" id="logo"/>
    </b-col>
</template>

<script>
    import DigitalClock from "vue-digital-clock";

    export default {
        name: "Reserved",
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
    h2, h3{
        font-family: 'Rokkitt', serif;
        color: white;
    }
    h4{
        color: white;
        font-family: "Open Sans", serif;
        font-size: 50px;
        font-weight: 300;
    }

    button{
        color: #f29a2c;
        font-family: 'Rokkitt', serif;
        font-size: 30px;
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 20px;
    }
    #logo{
        position: absolute;
        bottom: 40px;
        right: 60px;
        float: right;
    }
    #digiclock{
        color: white;
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
        background-color: #f29a2c;
        height: 100vh;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 10px;
    }


</style>
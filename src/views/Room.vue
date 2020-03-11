<template>
    <b-container fluid>
        <b-row>
            <b-col cols="9" id="mainDiv">
                <b-row>
                    <b-col cols="10">
                        <h1>Asimov</h1>
                    </b-col>
                    <b-col cols="2">
                        <digital-clock id="digiclock"></digital-clock>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2 id="status">OCCUPIED</h2>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3" id="calenderDiv">
                <calender></calender>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Calender from '../components/Calender.vue'
    import DigitalClock from "vue-digital-clock";
    export default {
        name: "Room",
        components: {
            Calender,
            DigitalClock
        }
    }
</script>

<style scoped>
    h1{
        color: white;
        font-family: 'Rokkitt', serif;
        font-size: 100px;
        float: left;
        padding-top: 10px;
        padding-left: 10px;
    }
    h2, h3, h4{
        font-family: 'Rokkitt', serif;
        color: white;
    }

    #digiclock{
        color: white;
        float: right;
        font-size: 80px;
        padding-top: 10px;
        padding-right: 20px;
        font-family: "Lato Light", serif;
        font-weight: 100;
    }
    #status{
        float: none;
        font-size: 200px;
        padding-top: 150px;
    }
    #titleDiv{
        height: 120px;
    }
    #mainDiv{
        background-color: #c12c3f;
        height: 100vh;
    }
</style>
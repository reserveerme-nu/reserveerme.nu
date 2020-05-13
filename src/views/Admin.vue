<template>
    <b-container id="container">
        <b-row>
            <b-col class="column">
                <exchange-credentials></exchange-credentials>
            </b-col>
            <b-col class="column">
            </b-col>
            <b-col class="column">
                <digital-clock id="digiclock"></digital-clock>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import DigitalClock from "vue-digital-clock";
    import ExchangeCredentials from "../components/ExchangeCredentials";
    export default {
        name: "Admin",
        components: {
            ExchangeCredentials,
            DigitalClock
        }
    }
</script>

<style scoped>
    #container {
        background-color: lightgray;
        height: 100vh;
    }
    #digiclock {
        color: white;
        float: right;
        font-size: 70px;
        font-family: "Open Sans", serif;
        font-weight: 300;
        margin-right: 20px;
    }
    .column {
        margin-top: 15px;
    }
</style>
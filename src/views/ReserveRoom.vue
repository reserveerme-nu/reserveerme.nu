<template>
    <b-container fluid>
        <b-row>
            <b-col cols="9" id="mainDiv">
                <b-row id="titleDiv">
                    <b-col cols="10">
                        <h1>{{ $t('reserve.title') }} {{roomInfo.roomName}}</h1>
                    </b-col>
                    <b-col cols="2">
                        <digital-clock id="digiclock"></digital-clock>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <br><br><br>
                        <p>{{ $t('reserve.when') }}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <button type="button" v-bind:class="{ active: reserveNow }" v-on:click="this.directReserve">{{ $t('reserve.direct') }}</button>
                        <button type="button" v-bind:class="{ active: !reserveNow }" v-on:click="this.futureReserve">{{ $t('reserve.future') }}</button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <datetimepicker
                                v-if="reserveNow === false"
                                type="datetime"
                                input-style="
                                    font-size: 22pt; color: #009ddc;
                                    float: left;
                                    margin: 20px 20px 20px 0px;
                                    width: 600px;
                                    height: 40px;
                                    border-bottom: solid medium #646464;"
                                v-model="datetime"
                                class="datetime-picker">
                        </datetimepicker>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <br><br><br>
                        <p>{{ $t('reserve.duration') }}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <button type="button" v-bind:class="{ active: isActive15 }" v-on:click="this.setTime15">15 {{ $t('time.min') }}</button>
                        <button type="button" v-bind:class="{ active: isActive30 }" v-on:click="this.setTime30">30 {{ $t('time.min') }}</button>
                        <button type="button" v-bind:class="{ active: isActive45 }" v-on:click="this.setTime45">45 {{ $t('time.min') }}</button>
                        <button type="button" v-bind:class="{ active: isActive60 }" v-on:click="this.setTime60">1 {{ $t('time.hour') }}</button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <br><br><br>
                        <p>{{ $t('reserve.who') }}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <input v-model="issuer" id="nameInputField" ref="username" placeholder="...">
                    </b-col>
                </b-row>
                <div id="options">
                    <button id="start" type="button" v-on:click="this.makeReservation">{{ this.buttonText }}</button>
                    <button id="cancel" type="button" v-on:click="this.cancel">{{ $t('reserve.cancel') }}</button>
                </div>
            </b-col>
            <b-col cols="3" id="calenderDiv">
                <calender></calender>
            </b-col>
        </b-row>
        <div class="locale-changer">
            <flag v-if="$i18n.locale === 'en'" :iso="'us'" v-bind:squared=false />
            <flag v-else-if="$i18n.locale === 'nl'" :iso="'nl'" v-bind:squared=false />
            <select v-model="$i18n.locale">
                <option v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
        </div>
    </b-container>
</template>

<script>
    import Calender from '../components/Calender.vue'
    import DigitalClock from "vue-digital-clock";
    import { Datetime } from 'vue-datetime';
    import { Settings } from 'luxon';
    import router from "../router";
    import Service from "../api.service.js";

    export default {
        props:['roomInfo'],
        name: "ReserveRoom",
        components: {
            DigitalClock,
            datetimepicker: Datetime,
            Calender
        },
        data() {
            return {
                reserveNow: true,
                isActive15: true,
                isActive30: false,
                isActive45: false,
                isActive60: false,
                time: 15,
                userId: 1,
                issuer: "...",
                datetime: new Date().toJSON(),
                buttonText: this.$t('reserve.start')
            }
        },
        methods: {
            update: function() {
                Settings.defaultLocale = this.$i18n.locale;
            },
            directReserve: function() {
                this.reserveNow = true;
                this.buttonText = this.$t('reserve.start');
            },
            futureReserve: function() {
                this.reserveNow = false;
                this.buttonText = this.$t('reserve.reserve');
            },
            resetTime: function() {
                this.isActive15 = false;
                this.isActive30 = false;
                this.isActive45 = false;
                this.isActive60 = false;
            },
            setTime15: function() {
                this.resetTime();
                this.isActive15 = true;
                this.time = 15;
            },
            setTime30: function() {
                this.resetTime();
                this.isActive30 = true;
                this.time = 30;
            },
            setTime45: function() {
                this.resetTime();
                this.isActive45 = true;
                this.time = 45;
            },
            setTime60: function() {
                this.resetTime();
                this.isActive60 = true;
                this.time = 60;
            },
            makeReservation: function() {
                if (this.reserveNow)
                {
                    Service.CreateDirectReservation(this.roomInfo.roomId, this.time, this.issuer).then(response => {
                        console.log(response);
                        this.startMeeting();
                    })
                }
                else
                {
                    Service.CreateReservation(this.roomInfo.roomId, this.datetime, this.time, this.issuer).then(response => {
                        console.log(response);
                        router.push("/");
                    })
                }
            },
            startMeeting: function() {
                Service.StartMeeting(this.roomInfo.roomId).then(response => {
                    console.log(response);
                    router.push("/");
                });
            },
            cancel: function() {
                router.push("/");
            }
        },
        mounted() {
            this.update();
        }
    }
</script>

<style scoped>
    p{
        color: #646464;
        font-family: "Open Sans", serif;
        font-size: 22px;
        float: left;
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

    button{
        color: #646464;
        font-family: 'Rokkitt', serif;
        font-size: 30px;
        padding-left: 15px;
        padding-right: 15px;
        margin: 0px 20px 20px 0px;
        float: left;
        border: solid medium #646464;
        background: transparent;
    }

    input{
        font-size: 22pt;
        color: #009ddc;
        float: left;
        margin: 20px 20px 20px 0px;
        width: 600px;
        height: 40px;
        border-bottom: solid medium #646464;
    }

    .active{
        color: #009ddc;
        border: solid medium #009ddc;
    }

    #digiclock{
        color: #646464;
        float: right;
        font-size: 70px;
        font-family: "Open Sans", serif;
        font-weight: 300;
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
    #options{
        position: absolute;
        bottom: 50px;
        left: 50px;
    }
    #start{
        color: #ffffff;
        background: #009ddc;
        border: solid medium #009ddc;
    }
    .locale-changer{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
</style>

<style >
    .datetime-picker .vdatetime-popup__header,
    .datetime-picker .vdatetime-calendar__month__day--selected > span > span,
    .datetime-picker .vdatetime-calendar__month__day--selected:hover > span > span {
        background: #009ddc;
    }

    .datetime-picker .vdatetime-year-picker__item--selected,
    .datetime-picker .vdatetime-month-picker__item--selected,
    .datetime-picker .vdatetime-time-picker__item--selected,
    .datetime-picker .vdatetime-popup__actions__button {
        color: #009ddc;
    }
</style>
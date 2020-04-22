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
        <p id="floor">{{roomInfo.roomFloor}} {{ $t('room.floor') }}</p>
        <p id="size">{{roomInfo.roomSize}} {{ $tc('room.persons', roomInfo.roomSize) }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2 id="status">{{ $t('free.status') }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <H4>{{ $tc('free.until', roomFreeTill.length) }} {{roomFreeTill}}</H4>
      </b-col>
    </b-row>
    <b-row>
      <button
        type="button"
        v-on:click="this.reserveRoom"
        style="margin: 20px auto;"
      >{{ $t('free.use') }}</button>
    </b-row>

    <div>
      <button id="more" type="button">{{ $t('free.find') }}</button>
    </div>

    <img src="@/assets/Fontys-Logo.png" height="100" width="160" alt="Fontys Logo" id="logo" />
  </b-col>
</template>

<script>
import i18n from "@/plugins/i18n";
import DigitalClock from "vue-digital-clock";
import router from "../../router";

export default {
  props: ["roomInfo"],
  name: "Free",
  components: {
    DigitalClock
  },
  data() {
    return {
      roomFreeTill: ""
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    reserveRoom: function() {
      router.push("/reserve");
    }
  }
};
</script>

<style scoped>
p {
  color: white;
  font-family: "Open Sans", serif;
  font-size: 22px;
  float: left;
  padding-right: 25px;
}
h1 {
  color: white;
  font-family: "Rokkitt", serif;
  font-size: 100px;
  float: left;
}
h2,
h3 {
  font-family: "Rokkitt", serif;
  color: white;
}
h4 {
  color: white;
  font-family: "Open Sans", serif;
  font-size: 50px;
  font-weight: 300;
}

button {
  color: #009ddc;
  font-family: "Rokkitt", serif;
  font-size: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 20px 20px 20px 0px;
  background: #ffffff;
  border: solid medium #ffffff;
}
#logo {
  position: absolute;
  bottom: 40px;
  right: 60px;
  float: right;
}
#digiclock {
  color: white;
  float: right;
  font-size: 70px;
  font-family: "Open Sans", serif;
  font-weight: 300;
}
#status {
  float: none;
  font-size: 200px;
  padding-top: 100px;
  height: 320px;
}
#titleDiv {
  height: 100px;
}
#mainDiv {
  background-color: #009ddc;
  height: 100vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
}
#more {
  position: absolute;
  bottom: 50px;
  left: 50px;
  background: transparent;
  color: #ffffff;
}
</style>
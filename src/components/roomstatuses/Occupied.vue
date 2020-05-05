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
        <h2 id="status">{{ $t('occupied.status') }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <H4>{{ $t('occupied.by') }} {{reservation.issuer}}</H4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <H4>{{ $t('occupied.until') }} {{reservation.dateEnd | moment("HH:mm")}}</H4>
      </b-col>
    </b-row>
    <b-row>
      <button type="button" style="margin: 20px auto;">{{ $t('occupied.find') }}</button>
    </b-row>
    <div>
      <button id="end-btn" type="button" v-on:click="this.endMeeting">{{ $t('occupied.end') }}</button>
      <button id="extend-btn" type="button" v-b-modal.modal-extend>{{ $t('occupied.extend') }}</button>
    </div>
    <div>
      <b-modal id="modal-extend" size="lg">
        <template v-slot:modal-header>
          <h5>{{ $t('extend.title') }}</h5>
        </template>
        <b-col>
          <b-row>
            <p class="modal-txt">{{ $t('extend.duration') }}</p>
          </b-row>
          <b-row>
            <button
              type="button"
              class="modal-btn"
              v-bind:class="{ active: isActive15 }"
              v-on:click="this.setTime15"
            >15 {{ $t('time.min') }}</button>
            <button
              type="button"
              class="modal-btn"
              v-bind:class="{ active: isActive30 }"
              v-on:click="this.setTime30"
            >30 {{ $t('time.min') }}</button>
            <button
              type="button"
              class="modal-btn"
              v-bind:class="{ active: isActive45 }"
              v-on:click="this.setTime45"
            >45 {{ $t('time.min') }}</button>
            <button
              type="button"
              class="modal-btn"
              v-bind:class="{ active: isActive60 }"
              v-on:click="this.setTime60"
            >1 {{ $t('time.hour') }}</button>
          </b-row>
        </b-col>
        <template v-slot:modal-footer="{ ok, cancel }">
          <button id="confirm-btn" @click="ok()">{{ $t('extend.confirm') }}</button>
          <button class="modal-btn" @click="cancel()">{{ $t('extend.cancel') }}</button>
        </template>
      </b-modal>
    </div>
    <img src="@/assets/Fontys-Logo.png" height="100" width="160" alt="Fontys Logo" id="logo" />
  </b-col>
</template>

<script>
import DigitalClock from "vue-digital-clock";
import Service from "@/api.service.js";

export default {
  props: ["roomInfo", "reservation"],
  name: "Occupied",
  components: {
    DigitalClock
  },
  data() {
    return {
      roomReservedBy: "Unknown",
      roomReservedTill: "Unknown",

      isActive15: true,
      isActive30: false,
      isActive45: false,
      isActive60: false
    };
  },
  methods: {
    resetTime: function() {
      this.isActive15 = false;
      this.isActive30 = false;
      this.isActive45 = false;
      this.isActive60 = false;
    },
    setTime15: function() {
      this.resetTime();
      this.isActive15 = true;
    },
    setTime30: function() {
      this.resetTime();
      this.isActive30 = true;
    },
    setTime45: function() {
      this.resetTime();
      this.isActive45 = true;
    },
    setTime60: function() {
      this.resetTime();
      this.isActive60 = true;
    },
    endMeeting: function() {
      Service.EndMeeting(this.roomInfo.roomId).then(response => {
        console.log(response);
        this.$router.go(0);
      });
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
h5 {
  color: #646464;
  font-family: "Rokkitt", serif;
  font-size: 50px;
  float: left;
}

button {
  color: #c12c3f;
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
  background-color: #c12c3f;
  height: 100vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
}
#extend-btn {
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: #ffffff;
  background: transparent;
}
#end-btn {
  position: absolute;
  bottom: 110px;
  left: 50px;
  color: #ffffff;
  background: transparent;
}
#confirm-btn {
  color: #ffffff;
  background: #009ddc;
  border: solid medium #009ddc;
  float: left;
}
.modal-txt {
  color: #646464;
  font-family: "Open Sans", serif;
  font-size: 22px;
  float: left;
}
.modal-btn {
  color: #646464;
  float: left;
  border: solid medium #646464;
  background: transparent;
}
.active {
  color: #009ddc;
  border: solid medium #009ddc;
}
</style>
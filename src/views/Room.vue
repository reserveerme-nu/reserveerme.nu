<template>
  <b-container fluid>
    <b-row>
      <loading v-if="this.roomInfo.roomStatus === 'loading'" v-bind:roomInfo="roomInfo"></loading>
      <free v-else-if="this.roomInfo.roomStatus === 0" v-bind:roomInfo="roomInfo"></free>
      <reserved
        v-else-if="this.roomInfo.roomStatus === 1"
        v-bind:roomInfo="roomInfo"
        v-bind:reservation="reservation"
      ></reserved>
      <occupied
        v-else-if="this.roomInfo.roomStatus === 2"
        v-bind:roomInfo="roomInfo"
        v-bind:reservation="reservation"
      ></occupied>
      <b-col cols="3" id="calenderDiv">
        <calender></calender>
      </b-col>
    </b-row>
    <div class="locale-changer">
      <flag v-if="$i18n.locale === 'en'" :iso="'us'" v-bind:squared="false" />
      <flag v-else-if="$i18n.locale === 'nl'" :iso="'nl'" v-bind:squared="false" />
      <select v-model="$i18n.locale">
        <option
          v-for="(lang, i) in $i18n.availableLocales"
          :key="`Lang${i}`"
          :value="lang"
        >{{ lang }}</option>
      </select>
    </div>
  </b-container>
</template>

<script>
import Calender from "../components/Calender.vue";
import Loading from "../components/roomstatuses/Loading.vue";
import Free from "../components/roomstatuses/Free";
import Occupied from "../components/roomstatuses/Occupied";
import Reserved from "../components/roomstatuses/Reserved";
import Service from "../api.service.js";
import WS from "../ws.service";
export default {
  props: ["roomInfo"],
  name: "Room",
  components: {
    Loading,
    Reserved,
    Occupied,
    Calender,
    Free
  },
  data() {
    return {
      reservation: {
        issuer: "",
        dateEnd: ""
      }
    };
  },
  created() {
    Service.GetStatus(this.roomInfo.roomId).then(response => {
      console.log(response);
      this.roomInfo.roomStatus = response.data.statusType;
      this.reservation = response.data.reservation;
      console.log(this.reservation);
    });
  },
  methods: {
    loadEvents(wsEvent) {
      if (wsEvent.data == "update") {
        console.log("test");
        this.$router.go();
      }
    }
  },
  mounted: function() {
    console.log("test");

    WS.onopen = function() {
      console.log("<<<~-    [C O N N E C T E D]   -~>>>");
    };

    WS.onmessage = this.loadEvents;
  }
};
</script>

<style scoped>
.locale-changer {
  position: absolute;
  bottom: 10px;
  right: 30px;
}
#calenderDiv {
  width: 100%;
  height: 100vh;
  padding: 0;
}
</style>
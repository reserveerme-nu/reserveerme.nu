<template>
  <div id="app">
    <router-view v-bind:roomInfo="roomInfo"></router-view>

    <div>
      <b-modal ref="my-modal" hide-footer title="Welcome to reserveerme.nu">
        <div class="d-block text-center">
          <h3>Initial Setup</h3>
        </div>
        <label>Room Name:</label>
        <b-form-input v-model="roomInfo.roomName" placeholder="Asimov"></b-form-input>
        <label>Floor:</label>
        <b-form-input v-model="roomInfo.roomFloor" placeholder="4th"></b-form-input>
        <label>Room Size:</label>
        <b-form-input v-model="roomInfo.roomSize" type="range" min="1" max="24"></b-form-input>
        <div class="mt-2">Value: {{ roomInfo.roomSize }}</div>
        <b-button class="mt-3" block @click="onFormSubmit">Hand in quest</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import ApiService from "./api.service";
export default {
  name: "App",
  components: {},
  data() {
    return {
      roomInfo: {
        roomId: 0,
        roomName: "Asimov",
        roomFloor: "4th",
        roomSize: 4,
        roomStatus: "loading"
      }
    };
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show();
    },
    onFormSubmit() {
      this.$refs['my-modal'].hide();
      ApiService.AddRoom(this.roomInfo.roomName, this.roomInfo.roomFloor, Number(this.roomInfo.roomSize)).then((response) => {
        this.roomInfo.roomId = response.data
        localStorage.setItem('roomid', response.data)
      })
    }
  },
  mounted() {
    if(localStorage.getItem('roomid') == null){
      this.showModal()
    }
    else {
      let id = localStorage.getItem('roomid');
      ApiService.GetRoomById(id).then((response) => {
        if(response.status === 204) {
          localStorage.removeItem('roomid')
          this.showModal()
        }
        else {
          this.roomInfo.roomName = response.data.roomName;
          this.roomInfo.roomFloor = response.data.floor;
          this.roomInfo.roomSize = response.data.roomSize;
        }
      })
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

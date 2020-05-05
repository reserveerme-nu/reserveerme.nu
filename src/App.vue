<template>
  <div id="app">
    <router-view v-bind:roomInfo="roomInfo"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      roomInfo: {
        roomId: 1,
        roomName: "Asimov",
        roomFloor: "4th",
        roomSize: 4,
        roomStatus: 'loading'
      }
    }
  }
}
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

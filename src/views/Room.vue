<template>
    <b-container fluid >
        <b-row>
            <loading v-if="this.roomInfo.roomStatus === 'loading'" v-bind:roomInfo="roomInfo"></loading>
            <occupied v-else-if="this.roomInfo.roomStatus === 'occupied'" v-bind:roomInfo="roomInfo"></occupied>
            <free v-else-if="this.roomInfo.roomStatus === 'free'" v-bind:roomInfo="roomInfo"></free>
            <reserved v-else-if="this.roomInfo.roomStatus === 'reserved'" v-bind:roomInfo="roomInfo"></reserved>
            <b-col cols="3" id="calenderDiv">
                <calender></calender>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Calender from '../components/Calender.vue';
    import Loading from "../components/roomstatuses/Loading.vue";
    import Free from "../components/roomstatuses/Free";
    import Occupied from "../components/roomstatuses/Occupied";
    import Reserved from "../components/roomstatuses/Reserved";
    import Service from "../api.service.js";
    export default {
        props:['roomInfo'],
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

            }
        },
        created() {
            Service.GetStatus(this.roomInfo.roomId).then(response => {
                console.log(response);
                this.roomInfo.roomStatus = response.data;
            })
        }
    }
</script>

<style scoped>


</style>
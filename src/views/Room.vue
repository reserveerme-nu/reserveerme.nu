<template>
    <b-container fluid>
        <b-row>
            <loading v-if="this.roomStatus === 'loading'"></loading>
            <occupied v-else-if="this.roomStatus === 'occupied'"></occupied>
            <free v-else-if="this.roomStatus === 'free'"></free>
            <reserved v-else-if="this.roomStatus === 'reserved'"></reserved>
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
                roomId: 1,
                roomStatus: "loading"
            }
        },
        mounted() {
            Service.GetStatus(this.roomId).then(response => {
                console.log(response);
                this.roomStatus = response.data;
            })
        }
    }
</script>

<style scoped>


</style>
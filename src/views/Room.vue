<template>
    <b-container fluid>
        <b-row>
            <occupied v-if="this.roomStatus === 'occupied'"></occupied>
            <free v-else-if="this.roomStatus === 'free'"></free>
            <reserved v-else-if="this.roomStatus === 'reserved'"></reserved>
            <b-col cols="3" id="calenderDiv">
                <calender></calender>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Calender from '../components/Calender.vue'
    import Free from "../components/roomstatuses/Free";
    import Occupied from "../components/roomstatuses/Occupied";
    import Reserved from "../components/roomstatuses/Reserved";
    export default {
        name: "Room",
        components: {
            Reserved,
            Occupied,
            Calender,
            Free
        },
        data() {
            return {
                roomStatus: "free"
            }
        }
    }
</script>

<style scoped>


</style>
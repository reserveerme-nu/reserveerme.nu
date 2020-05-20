<template>
    <div>
       <b-button @click="test"></b-button>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                ws : Object
            }
        },
        mounted() {
            this.ws = new WebSocket("ws://localhost:6969/reservation")

            this.ws.onopen = function() {
                console.log("<<<~-    [C O N N E C T E D]   -~>>>")
            }

            this.ws.onmessage = function() {
                console.log("PING")
            }

        },
        methods: {
            test() {
                this.ws.send("INSERT_MESSAGE_HERE");
            }
        }
    }
</script>

<style scoped>

</style>
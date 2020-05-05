<template>
    <DayPilotCalendar id="dp" :config="config" ref="calendar" />
</template>

<script>
    import {DayPilot, DayPilotCalendar} from 'daypilot-pro-vue'
    import Vue from 'vue'
    import Service from "../api.service";

    export default {
        name: 'Calendar',
        data: function() {
            return {
                config: {
                    locale: "nl-nl",
                    viewType: "Day",
                    cellHeight: 45,
                    timeRangeSelectedHandling: "Enabled",
                    // onTimeRangeSelected: function (args) {
                    //     DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
                    //         var dp = args.control;
                    //         dp.clearSelection();
                    //         if (!modal.result) { return; }
                    //         dp.events.add(new DayPilot.Event({
                    //             start: args.start,
                    //             end: args.end,
                    //             id: DayPilot.guid(),
                    //             text: modal.result
                    //         }));
                    //     });
                    // },
                    eventDeleteHandling: "Disabled",
                    eventMoveHandling: "Disabled",
                    eventResizeHandling: "Disabled",
                    eventClickHandling: "Disabled",
                    eventHoverHandling: "Disabled",
                },
            }
        },
        props: {
        },
        components: {
            DayPilotCalendar
        },
        computed: {
            // DayPilot.Calendar object - https://api.daypilot.org/daypilot-calendar-class/
            calendar: function () {
                return this.$refs.calendar.control;
            }
        },
        methods: {
            loadEvents() {
                const events = [];
                Service.GetSchedule(1).then(response => {
                    response.data.forEach(object =>{
                        events.push({
                            id: events.length + 1,
                            start: new DayPilot.Date(object.start).addHours(2),
                            end: new DayPilot.Date(object.end).addHours(2),
                            text: object.subject,
                        })
                    })
                });


                Vue.set(this.config, "events", events);
            }
        },
        mounted: function() {
            this.loadEvents();

            this.calendar.message("Loading schedule...");
        }
    }
</script>

<style scoped>
    #dp {
        height: 100vh;
    }
</style>

<style>

</style>

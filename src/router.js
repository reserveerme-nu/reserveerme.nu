import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Room from './views/Room.vue';
import ReserveRoom from './views/ReserveRoom.vue';

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Room',
            component: Room,
        },
        {
            path: '/reserve',
            name: 'ReserveRoom',
            component: ReserveRoom
        },
    ]
})

export default router
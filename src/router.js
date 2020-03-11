import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Room from './views/Room.vue';

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Room',
            component: Room,
        },
    ]
})

export default router
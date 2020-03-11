import Vue from 'vue'
import App from './App.vue'
import router from './router';
import "./assets/global.css"
// START OF BOOTSTRAP
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// END OF BOOTSTRAP

// START OF VUE-ROUTER
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// END OF VUE-ROUTER

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

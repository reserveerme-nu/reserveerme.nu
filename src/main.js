import Vue from 'vue'
import App from './App.vue'
import router from './router'

// START OF i18n
import i18n from './plugins/i18n'
import FlagIcon from 'vue-flag-icon';

Vue.use(FlagIcon);

// END OF i18n

// START OF BOOTSTRAP
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "./assets/global.css"
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
  i18n,
  render: h => h(App),
}).$mount('#app');

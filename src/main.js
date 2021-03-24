import Vue from 'vue';
import settings from '@/settings.js';
import App from './app.vue';
import router from './router/index';
import store from './store/index';
/* the global css */
import '@/styles/func.css';

import './permission';


Vue.config.productionTip = false;

Vue.mixin({
  computed: {
  // global settings
    $settings() {
      return settings;
    },
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

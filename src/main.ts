import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBalanceScale, faCartPlus, faCalendarPlus, faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faBalanceScale, faCartPlus, faCalendarPlus, faMoneyBill,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

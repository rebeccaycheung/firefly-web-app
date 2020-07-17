import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBalanceScale,
  faCartPlus,
  faCalendarPlus,
  faMoneyBill,
  faArrowRight,
  faCheckCircle,
  faPlus,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueApexCharts from 'vue-apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faBalanceScale,
  faCartPlus,
  faCalendarPlus,
  faMoneyBill,
  faArrowRight,
  faCheckCircle,
  faPlus,
  faListUl,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

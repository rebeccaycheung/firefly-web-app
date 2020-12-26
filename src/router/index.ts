import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Transactions from '../views/Transaction/Transactions.vue';
import ViewTransaction from '../views/Transaction/ViewTransaction.vue';
import AddTransaction from '../views/Transaction/AddTransaction.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions,
  },
  {
    path: '/transaction',
    name: 'ViewTransaction',
    component: ViewTransaction,
  },
  {
    path: '/transaction/add',
    name: 'AddTransaction',
    component: AddTransaction,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

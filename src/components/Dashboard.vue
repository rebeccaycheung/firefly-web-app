<template>
  <div class="dashboard">
      <div class="item">
          <font-awesome-icon icon="balance-scale" class="icon"/>
          <div class="text">
            <span class="number">${{ balance }}</span>
            <br>
            BALANCE
          </div>
      </div>
      <div class="item">
          <font-awesome-icon icon="cart-plus" class="icon"/>
          <div class="text">
            <span class="number">${{ spending }}</span>
            <br>
            LEFT IN SPENDING
          </div>
      </div>
      <div class="item">
          <font-awesome-icon icon="calendar-plus" class="icon"/>
          <div class="text">
            <span class="number">${{ bills }}</span>
            <br>
            LEFT IN BILLS
          </div>
      </div>
      <div class="item">
          <font-awesome-icon icon="money-bill" class="icon"/>
          <div class="text">
            <span class="number">${{ netWorth }}</span>
            <br>
            NET WORTH
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dashboard',
  props: {
    balance: String,
    spending: String,
    bills: String,
    netWorth: String,
  },
});
</script>

<style scoped>
.dashboard {
    display: flex;
    justify-content: space-around;
    background-color: #44475A;
    padding: 2rem;
    border-radius: 8px;
}

.item {
    min-width: 120px;
    max-width: 200px;
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.icon {
    font-size: 2.5rem;
    margin-right: 1rem;
    color: #C58FFF;
}

.number {
    font-size: 20px;
    font-weight: bold;
}

.text {
    color: #EEFB7A;
}
</style>

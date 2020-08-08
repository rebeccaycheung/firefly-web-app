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
import mixins from 'vue-typed-mixins';
import axios from 'axios';
import authoriseMixins from '@/mixins/authoriseMixins';

export default mixins(authoriseMixins).extend({
  name: 'Dashboard',
  data() {
    return {
      balance: 0,
      spending: 0,
      bills: 0,
      netWorth: 0,
    };
  },
  methods: {
    fetchSummary() {
      const config = this.authorise();

      const params = {
        start: '2020-08-01',
        end: '2020-08-31',
      };

      config.params = params;

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}summary/basic`,
        config,
      )
        .then((response) => {
          console.log(response.data);
          this.balance = response.data['balance-in-AUD'].monetary_value;
          const spending = response.data['left-to-spend-in-AUD'].monetary_value;
          this.bills = -response.data['bills-unpaid-in-AUD'].monetary_value;
          this.netWorth = response.data['net-worth-in-AUD'].monetary_value;

          this.spending = spending - this.bills;
        });
    },
  },
  created() {
    this.fetchSummary();
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

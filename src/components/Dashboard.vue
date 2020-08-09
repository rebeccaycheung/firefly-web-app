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
import dateMixins from '@/mixins/dateMixins';

export default mixins(authoriseMixins, dateMixins).extend({
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

      const params = this.getDate();

      config.params = params;

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}summary/basic`,
        config,
      )
        .then((response) => {
          this.balance = response.data['balance-in-AUD'].monetary_value;
          this.bills = -response.data['bills-unpaid-in-AUD'].monetary_value;
          this.netWorth = response.data['net-worth-in-AUD'].monetary_value;
        });

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}budgets`,
        config,
      )
        .then((response) => {
          Object.keys(response.data.data).forEach((value) => {
            if ((response.data.data[value].attributes.name).includes('Spending')) {
              const spending = response.data.data[value].attributes.spent[0].sum;
              this.fetchSpendingLimit(response.data.data[value].id, config, spending);
            }
          });
        });
    },
    fetchSpendingLimit(id: number, config: Record<string, any>, spending: number) {
      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}budgets/${id}/limits`,
        config,
      )
        .then((response) => {
          this.spending = response.data.data[0].attributes.amount - -spending;
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

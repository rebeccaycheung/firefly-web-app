<template>
  <div class="expenditure">
    <div v-for="(key, value, index) in expenditure" :key="index">
      <div v-if="index != Object.keys(expenditure).length - 1 && index != 0">
        <div class="row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ parseFloat(key.amount).toFixed(2) }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
      <div v-else-if="index == 0">
        <div class="first-row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ parseFloat(key.amount).toFixed(2)  }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="last-row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ parseFloat(key.amount).toFixed(2)  }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
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
  name: 'Expenditure',
  data() {
    return {
      expenditure: {},
      limit: 5,
    };
  },
  methods: {
    authorise() {
      const token = process.env.VUE_APP_TOKEN;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
      };

      return config;
    },
    fetchExpenditure() {
      const config = this.authorise();

      const params = this.getDate();

      config.params = params;

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}transactions`,
        config,
      )
        .then((response) => {
          this.formatExpenditure(response.data.data);
        });
    },
    formatExpenditure(data: Record<string, any>) {
      Object.keys(data).forEach((value) => {
        const { transactions } = data[value].attributes;
        Object.keys(transactions).forEach((item, index) => {
          const { amount, description, type } = transactions[item];
          if (type === 'withdrawal') {
            this.$set(this.expenditure, description, { id: index, amount });
          }
        });
      });
    },
  },
  created() {
    this.fetchExpenditure();
  },
});
</script>

<style scoped>
.expenditure {
    background-color: #44475A;
    padding: 1rem;
    border-radius: 8px;
}

.row {
  padding: 1rem 1rem 2rem 1rem;
  border-bottom: 2px solid #282A37;
}

.first-row {
  padding: 0rem 1rem 2rem 1rem;
  border-bottom: 2px solid #282A37;
}

.last-row {
  padding: 1rem 1rem 1rem 1rem;
  border-bottom: none;
}

.name {
  float: left;
}

.amount {
  float: right;
}

.icon {
  color: #6CECFF;
  margin-left: 5px;
}
</style>

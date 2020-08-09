<template>
  <div class="bills">
    <div v-for="(key, value, index) in expectedBills" :key="key.id">
      <div v-if="index != Object.keys(expectedBills).length - 1 && index != 0">
        <div class="row">
          <div class="name">{{ value }} </div>
          <div v-if="key.paid" class="paid">
            Paid
            <font-awesome-icon icon="check-circle" class="icon green"/>
          </div>
          <div v-else class="paid">
            Not paid
            <font-awesome-icon icon="times-circle" class="icon red"/>
          </div>
        </div>
      </div>
      <div v-else-if="index == 0">
        <div class="first-row">
          <div class="name">{{ value }}</div>
          <div v-if="key.paid" class="paid">
            Paid
            <font-awesome-icon icon="check-circle" class="icon green"/>
          </div>
          <div v-else class="paid">
            Not paid
            <font-awesome-icon icon="times-circle" class="icon red"/>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="last-row">
          <div class="name">{{ value }}</div>
          <div v-if="key.paid" class="paid">
            Paid
            <font-awesome-icon icon="check-circle" class="icon green"/>
          </div>
          <div v-else class="paid">
            Not paid
            <font-awesome-icon icon="times-circle" class="icon red"/>
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
  name: 'ExpectedBills',
  data() {
    return {
      expectedBills: {},
    };
  },
  methods: {
    fetchExpectedBills() {
      const config = this.authorise();

      const params = this.getDate();

      config.params = params;

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}bills`,
        config,
      )
        .then((response) => {
          this.formatExpectedBills(response.data.data);
        });
    },
    formatExpectedBills(data: Record<string, any>) {
      Object.keys(data).forEach((value, index) => {
        const { name } = data[value].attributes;
        const payDates = data[value].attributes.pay_dates;
        const paid = data[value].attributes.paid_dates;
        if (payDates.length > 0) {
          this.$set(this.expectedBills, name, { id: index, paid: false });
          if (paid.length > 0) {
            this.$set(this.expectedBills, name, { id: index, paid: true });
          }
        }
      });
    },
  },
  created() {
    this.fetchExpectedBills();
  },
});
</script>

<style scoped>
.bills {
    background-color: #44475A;
    padding: 1rem;
    border-radius: 8px;
    min-width: 400px;
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

.paid {
  float: right;
}

.icon {
  margin-left: 5px;
}

.red {
  color: #FF6DC9;
}

.green {
  color: #00FF68;
}
</style>

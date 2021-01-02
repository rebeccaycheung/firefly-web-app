<template>
  <div class="expenditure">
      <Heading title="Transaction" />
      {{ transaction }}
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/camelcase
import mixins from 'vue-typed-mixins';
import axios from 'axios';
import Heading from '@/components/Heading.vue';
import authoriseMixins from '@/mixins/authoriseMixins';
import dateMixins from '@/mixins/dateMixins';
import round2DecimalMixins from '@/mixins/round2DecimalMixins';

export default mixins(authoriseMixins, dateMixins, round2DecimalMixins).extend({
  name: 'ViewTransaction',
  components: {
    Heading,
  },
  data() {
    return {
      transaction: {},
    };
  },
  methods: {
    fetchTransaction() {
      const config = this.authorise();

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}transactions/1754`,
        config,
      )
        .then((response) => {
          this.formatTransaction(response.data.data);
        });
    },
    formatTransaction(data: Record<string, any>) {
      const { transactions } = data.attributes;
      Object.keys(transactions).forEach((item) => {
        const {
          amount,
          description,
          category_name,
          budget_name,
          source_name,
          destination_name,
          type,
        } = transactions[item];
        if (type === 'withdrawal') {
          this.$set(this.transaction, description, {
            amount: this.getRoundDecimal(amount),
            category: category_name,
            budget: budget_name,
            source: source_name,
            destination: destination_name,
            type,
          });
        }
      });
    },
  },
  created() {
    this.fetchTransaction();
  },
});
</script>

<style scoped>
.expenditure {
    background-color: #44475A;
    padding: 1rem 1rem 2.5rem 1rem;
    border-radius: 8px;
}
</style>

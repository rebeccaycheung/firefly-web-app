<template>
  <div class="summary">
    <div v-for="(key, value, index) in accounts" :key="key.id">
      <div v-if="index != Object.keys(accounts).length - 1 && index != 0">
        <div class="row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ key.amount }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
      <div v-else-if="index == 0">
        <div class="first-row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ key.amount }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="last-row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ key.amount }}
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

export default mixins(authoriseMixins).extend({
  name: 'Summary',
  data() {
    return {
      accounts: {},
    };
  },
  methods: {
    fetchAccount() {
      const config = this.authorise();

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}accounts`,
        config,
      )
        .then((response) => {
          this.formatAccountData(response.data.data);
        });
    },
    formatAccountData(data: Record<string, any>) {
      Object.keys(data).forEach((value, index) => {
        const { type, name } = data[value].attributes;
        if (type === 'asset') {
          this.$set(this.accounts, name, {
            id: index,
            amount: data[value].attributes.current_balance,
          });
        }
      });
    },
  },
  created() {
    this.fetchAccount();
  },
});
</script>

<style scoped>
.summary {
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

.amount {
  float: right;
}

.icon {
  color: #6CECFF;
  margin-left: 5px;
}
</style>

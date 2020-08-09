<template>
  <div class="home">
    <div class="dashboard">
      <Heading title="Dashboard" />
      <Dashboard />
    </div>
    <div class="links">
      <Heading title="Quick Links" />
      <QuickLinks />
    </div>
    <div class="spending">
      <Heading title="Spending" />
      <Spending />
    </div>
    <div class="bills">
      <Heading title="Expected Bills" />
      <ExpectedBills />
    </div>
    <div class="summary">
      <Heading title="Summary" />
      <Summary />
    </div>
    <div class="expenditure">
      <Heading title="Recent Expenditure" />
      <Expenditure :expenditure="expenditure" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Heading from '@/components/Heading.vue';
import Dashboard from '@/components/Dashboard.vue';
import Spending from '@/components/Spending.vue';
import Summary from '@/components/Summary.vue';
import ExpectedBills from '@/components/ExpectedBills.vue';
import QuickLinks from '@/components/QuickLinks.vue';
import Expenditure from '@/components/Expenditure.vue';

export default {
  name: 'Home',
  components: {
    Heading,
    Dashboard,
    Spending,
    Summary,
    ExpectedBills,
    QuickLinks,
    Expenditure,
  },
  data() {
    return {
      expenditure: {},
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

      const params = {
        start: '2020-07-01',
        end: '2020-07-31',
      };

      config.params = params;

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}transactions`,
        config,
      )
        .then((response) => {
          this.formatExpenditure(response.data.data);
        });
    },
    formatExpenditure(data) {
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
  beforeMount() {
    this.fetchExpenditure();
  },
};
</script>

<style scoped>
/* .home {
  display: grid;
  grid-template-columns: repeat( 3, 1fr );
  grid-template-rows: auto;
  grid-auto-flow: column;
  column-gap: 10px;
  row-gap: 15px;
  justify-items: stretch;
  align-items: stretch;
}

.dashboard {
  grid-column-start: 1;
  grid-column-end: 12;
  grid-row-start: 1;
  grid-row-end: 2;
}

.links {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.spending {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
}

.summary {
  grid-column-start: 6;
  grid-column-end: 12;
  grid-row-start: 2;
  grid-row-end: 4;
}

.bills {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 4;
} */
</style>

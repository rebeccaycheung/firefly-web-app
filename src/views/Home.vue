<template>
  <div class="home">
    <div class="heading">
      <Heading title="Dashboard" />
    </div>
    <div class="dashboard">
      <Dashboard :balance="balance" :spending="spending" :bills="bills" :netWorth="netWorth"/>
    </div>
    <div class="spending">
      <Spending :options="options" :series="series" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Heading from '@/components/Heading.vue';
import Dashboard from '@/components/Dashboard.vue';
import Spending from '@/components/Spending.vue';

export default {
  name: 'Home',
  components: {
    Heading,
    Dashboard,
    Spending,
  },
  data() {
    return {
      balance: 0,
      spending: 0,
      bills: 0,
      netWorth: 0,
      options: {
        labels: [],
        dataLabels: {
          style: {
            colors: ['#FFFFFF'],
          },
        },
        legend: {
          labels: {
            colors: '#FFFFFF',
          },
          markers: {
            radius: 3,
          },
        },
        stroke: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '60%',
              labels: {
                show: true,
                total: {
                  show: true,
                  showAlways: true,
                  color: '#FFFFFF',
                },
                value: {
                  show: true,
                  color: '#FFFFFF',
                },
              },
            },
          },
        },
      },
      series: [],
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
    fetchSummary() {
      const config = this.authorise();

      const params = {
        start: '2020-07-01',
        end: '2020-07-31',
      };

      config.params = params;

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}summary/basic`,
        config,
      )
        .then((response) => {
          this.balance = response.data['balance-in-AUD'].monetary_value;
          const spending = response.data['left-to-spend-in-AUD'].monetary_value;
          this.bills = -response.data['bills-unpaid-in-AUD'].monetary_value;
          this.netWorth = response.data['net-worth-in-AUD'].monetary_value;

          this.spending = spending - this.bills;
        });
    },
    fetchTransactionsByCategories() {
      const config = this.authorise();

      const params = {
        start: '2020-07-01',
        end: '2020-07-31',
      };

      config.params = params;

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}chart/category/overview`,
        config,
      )
        .then((response) => {
          Object.keys(response.data).forEach((value) => {
            if ((response.data[value].label).includes('Spent')) {
              console.log(response.data[value]);
              Object.keys(response.data[value].entries).forEach((key) => {
                const amount = Number(response.data[value].entries[key]);
                if (amount > 0) {
                  this.series.push(amount);
                  this.options.labels.push(key);
                }
              });
            }
          });
        });
    },
  },
  beforeMount() {
    this.fetchSummary();
    this.fetchTransactionsByCategories();
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
}

.heading {
  flex: 0 0 100%;
}

.dashboard {
  flex: 0 0 100%;
  margin-bottom: 1rem;
}
</style>

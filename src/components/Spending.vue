<template>
  <div class="spending">
    <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins';
import axios from 'axios';
import authoriseMixins from '@/mixins/authoriseMixins';

export default mixins(authoriseMixins).extend({
  name: 'Spending',
  data() {
    return {
      options: {
        labels: [] as string[],
        dataLabels: {
          enabled: false,
        },
        legend: {
          labels: {
            colors: '#FFFFFF',
          },
          markers: {
            radius: 3,
          },
          onItemClick: {
            toggleDataSeries: false,
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
                  label: 'SPENT',
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
      series: [] as number[],
    };
  },
  methods: {
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
  created() {
    this.fetchTransactionsByCategories();
  },
});
</script>

<style scoped>
.spending {
    background-color: #44475A;
    padding: 2rem;
    border-radius: 8px;
}
</style>

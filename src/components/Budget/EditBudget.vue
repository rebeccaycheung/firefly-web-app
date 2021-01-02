<template>
  <div class="view-budget">
      <Heading title="Edit Budget" />
      <form>
        <div class="form">
          <div class="form-item">
            <label for="total">Total</label>
            <br>
            <input v-model.trim="total" type="number">
          </div>
          <div v-for="(name, index) in budgetOptions" :key="index" class="form-item">
            <label for="name.value">{{ name.value }}</label>
            <br>
            <input v-model.trim="budgetAmount[name.value]" type="number">
          </div>
        </div>
      </form>
      <apexchart width="300" type="donut" :options="options" :series="series"></apexchart>
      <button v-on:click="save" class="save">Save</button>
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins';
import Heading from '@/components/Heading.vue';
import authoriseMixins from '@/mixins/authoriseMixins';
import dateMixins from '@/mixins/dateMixins';
import round2DecimalMixins from '@/mixins/round2DecimalMixins';
import budgetMixins from '@/mixins/budgetMixins';

export default mixins(authoriseMixins, dateMixins, round2DecimalMixins, budgetMixins).extend({
  name: 'EditBudget',
  components: {
    Heading,
  },
  data() {
    return {
      budgetOptions: [] as any[],
      budgetAmount: {},
      total: null,
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
                  label: 'TOTAL',
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
    fetchBudgetLimits() {
      this.budgetOptions.forEach((budget, index) => {
        const limit = this.getBudgetsLimit(budget.key);
        this.series.push(limit);
        this.options.labels.push(budget.value);
      });
    },
    async fetchBudget() {
      this.budgetOptions = await this.getBudgets();
      this.fetchBudgetLimits();
    },
    save() {
      console.log('hi');
    },
  },
  created() {
    this.fetchBudget();
  },
});
</script>

<style scoped>
.view-budget {
    margin-top: 1.5rem;
    background-color: #44475A;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    border-radius: 8px;
    width: 60%;
}

.save {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    background-color: #C58FFF;
    color: #fff;
    font-weight: 600;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
}

.form-item {
    margin: 1rem 1.5rem 1rem 0rem;
}

label {
    font-weight: 600;
}

input {
    margin-top: 0.5rem;
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    border-radius: 6px;
    border: none;
}
</style>

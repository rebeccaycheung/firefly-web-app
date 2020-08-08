<template>
  <div class="spending">
      <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Spending',
  props: {
    options: Object,
    series: Array,
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

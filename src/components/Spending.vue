<template>
  <div class="spending">
      <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Spending extends Vue {
    @Prop() private options!: Record<string, string>;

    @Prop() private series!: Array<Int32List>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spending {
    background-color: #44475A;
    padding: 2rem;
    border-radius: 8px;
}
</style>

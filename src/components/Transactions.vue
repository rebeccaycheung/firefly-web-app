<template>
  <div class="transaction">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Spending extends Vue {
    @Prop() private transactions!: Record<string, string>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transaction {
    background-color: #44475A;
    padding: 2rem;
    border-radius: 8px;
}
</style>

<template>
  <div class="bills">
    <div v-for="(item) in bills" :key="item.id">
        {{ item.attributes.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExpectedBills extends Vue {
  @Prop() private bills!: Record<string, string>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bills {
    background-color: #44475A;
    padding: 1rem;
    border-radius: 8px;
    min-width: 400px;
}
</style>

<template>
  <div class="summary">
      {{ account }} {{ balance }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Summary extends Vue {
    @Prop() private account!: string;
    @Prop() private balance!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

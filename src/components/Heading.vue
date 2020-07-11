<template>
  <div class="heading">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Heading extends Vue {
  @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-transform: uppercase;
}
</style>

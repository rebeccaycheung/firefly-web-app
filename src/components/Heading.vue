<template>
  <div class="heading">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Heading',
  props: {
    title: String,
  },
});
</script>

<style scoped>
h1 {
    text-transform: uppercase;
}
</style>

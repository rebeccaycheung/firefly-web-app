<template>
  <div class="heading">
    <h2>{{ title }}</h2>
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
h2 {
    text-transform: uppercase;
}
</style>

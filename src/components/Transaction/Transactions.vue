<template>
  <div class="home">
    <div class="expenditure">
        <Heading title="All Expenditure" />
        <Expenditure limit=30 />
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue';
import Expenditure from '@/components/Expenditure.vue';

export default {
  name: 'Transactions',
  components: {
    Heading,
    Expenditure,
  },
};
</script>

<style scoped>

</style>

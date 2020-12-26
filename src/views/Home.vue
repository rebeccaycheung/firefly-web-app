<template>
  <div class="home">
    <div class="dashboard">
      <Heading title="" />
      <Dashboard />
    </div>
    <div class="links">
      <Heading title="" />
      <QuickLinks />
    </div>
    <div class="grid-container">
      <div class="spending">
        <Heading title="Spending" />
        <Spending />
      </div>
      <div class="summary">
        <Heading title="Accounts Summary" />
        <Summary />
      </div>
      <div class="expenditure">
        <Heading title="Recent Expenditure" />
        <Expenditure limit=5 />
      </div>
      <div class="bills">
        <Heading title="Expected Bills" />
        <ExpectedBills />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue';
import Dashboard from '@/components/Dashboard.vue';
import Spending from '@/components/Spending.vue';
import Summary from '@/components/Summary.vue';
import ExpectedBills from '@/components/ExpectedBills.vue';
import QuickLinks from '@/components/QuickLinks.vue';
import Expenditure from '@/components/Expenditure.vue';

export default {
  name: 'Home',
  components: {
    Heading,
    Dashboard,
    Spending,
    Summary,
    ExpectedBills,
    QuickLinks,
    Expenditure,
  },
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}

.links {
  margin-top: 30px;
}

/* .home {
  display: grid;
  grid-template-columns: repeat( 3, 1fr );
  grid-template-rows: auto;
  grid-auto-flow: column;
  column-gap: 10px;
  row-gap: 15px;
  justify-items: stretch;
  align-items: stretch;
}

.dashboard {
  grid-column-start: 1;
  grid-column-end: 12;
  grid-row-start: 1;
  grid-row-end: 2;
}

.links {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.spending {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
}

.summary {
  grid-column-start: 6;
  grid-column-end: 12;
  grid-row-start: 2;
  grid-row-end: 4;
}

.bills {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 4;
} */
</style>

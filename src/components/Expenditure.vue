<template>
  <div class="expenditure">
    <div v-for="(key, value, index) in expenditure" :key="key.id">
      <div v-if="index != Object.keys(expenditure).length - 1 && index != 0">
        <div class="row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ key.amount }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
      <div v-else-if="index == 0">
        <div class="first-row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ key.amount }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="last-row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ key.amount }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Expenditure',
  props: {
    expenditure: Object,
  },
});
</script>

<style scoped>
.expenditure {
    background-color: #44475A;
    padding: 1rem;
    border-radius: 8px;
}

.row {
  padding: 1rem 1rem 2rem 1rem;
  border-bottom: 2px solid #282A37;
}

.first-row {
  padding: 0rem 1rem 2rem 1rem;
  border-bottom: 2px solid #282A37;
}

.last-row {
  padding: 1rem 1rem 1rem 1rem;
  border-bottom: none;
}

.name {
  float: left;
}

.amount {
  float: right;
}

.icon {
  color: #6CECFF;
  margin-left: 5px;
}
</style>

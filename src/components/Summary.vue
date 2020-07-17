<template>
  <div class="summary">
    <div v-for="(key, value, index) in items" :key="key.id">
      <div v-if="index != Object.keys(items).length - 1 && key.id != 0">
        <div class="row">
          <div class="name">{{ value }}</div>
          <div class="amount">
            ${{ key.amount }}
            <font-awesome-icon icon="arrow-right" class="icon"/>
          </div>
        </div>
      </div>
      <div v-else-if="key.id == 0">
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
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Summary extends Vue {
  @Prop() private items!: Record<string, string>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary {
    background-color: #44475A;
    padding: 1rem;
    border-radius: 8px;
    min-width: 400px;
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

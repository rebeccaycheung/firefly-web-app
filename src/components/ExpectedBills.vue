<template>
  <div class="bills">
    <div v-for="(key, value, index) in bills" :key="key.id">
      <div v-if="index != Object.keys(bills).length - 1 && index != 0">
        <div class="row">
          <div class="name">{{ value }} </div>
          <div v-if="key.paid" class="paid">
            Paid
            <font-awesome-icon icon="check-circle" class="icon"/>
          </div>
          <div v-else class="paid">
            Not paid
          </div>
        </div>
      </div>
      <div v-else-if="index == 0">
        <div class="first-row">
          <div class="name">{{ value }}</div>
          <div v-if="key.paid" class="paid">
            Paid
            <font-awesome-icon icon="check-circle" class="icon"/>
          </div>
          <div v-else class="paid">
            Not paid
          </div>
        </div>
      </div>
      <div v-else>
        <div class="last-row">
          <div class="name">{{ value }}</div>
          <div v-if="key.paid" class="paid">
            Paid
            <font-awesome-icon icon="check-circle" class="icon"/>
          </div>
          <div v-else class="paid">
            Not paid
          </div>
        </div>
      </div>
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

.paid {
  float: right;
}

.icon {
  color: #00FF68;
  margin-left: 5px;
}
</style>

<template>
    <div>
        <div class="quick-links">
            <button class="link" v-on:click="showTransaction">
                <div v-if="!openTransaction">
                    <font-awesome-icon icon="plus" class="icon pink-icon"/>
                    Add transaction
                </div>
                <div v-else>
                    <font-awesome-icon icon="times" class="icon pink-icon"/>
                    Close
                </div>
            </button>
            <button class="link" v-on:click="showBudget">
                <div v-if="!openBudget">
                    <font-awesome-icon icon="cart-plus" class="icon pink-icon"/>
                    Edit budget
                </div>
                <div v-else>
                    <font-awesome-icon icon="times" class="icon pink-icon"/>
                    Close
                </div>
            </button>
            <button class="link" v-on:click="showBills">
                <div v-if="!openBills">
                    <font-awesome-icon icon="calendar-plus" class="icon pink-icon"/>
                    Edit bills
                </div>
                <div v-else>
                    <font-awesome-icon icon="times" class="icon pink-icon"/>
                    Close
                </div>
            </button>
        </div>
        <div v-show="openTransaction" class="show-container">
            <AddTransaction />
        </div>
        <div v-show="openBudget" class="show-container">
            <EditBudget />
        </div>
        <div v-show="openBills" class="show-container">
            <EditBills />
        </div>
    </div>
</template>

<script lang="ts">
import AddTransaction from '@/components/Transaction/AddTransaction.vue';
import EditBudget from '@/components/Budget/EditBudget.vue';
import EditBills from '@/components/Bills/EditBills.vue';

export default {
  name: 'QuickLinks',
  components: {
    AddTransaction,
    EditBudget,
    EditBills,
  },
  data() {
    return {
      openTransaction: false,
      openBudget: false,
      openBills: false,
    };
  },
  methods: {
    showTransaction() {
      this.openTransaction = !this.openTransaction;
      this.openBudget = false;
      this.openBills = false;
    },
    showBudget() {
      this.openBudget = !this.openBudget;
      this.openTransaction = false;
      this.openBills = false;
    },
    showBills() {
      this.openBills = !this.openBills;
      this.openBudget = false;
      this.openTransaction = false;
    },
  },
};
</script>

<style scoped>
.quick-links {
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}

.show-container {
    display: flex;
    justify-content: center;
    align-content: center;
}

.links {
    background-color: #44475A;
    border-radius: 8px;
    margin-bottom: 0.5rem;
}

.link {
    border: none;
    padding: 1rem;
    background-color: #44475A;
    border-radius: 8px;
    margin-left: 10px;
    margin-right: 10px;
    width: 150px;
    text-align: center;
    color: #fff;
    text-decoration: none;
}

.icon {
    margin-right: 5px;
}

.pink-icon {
    color: #FF6DC9;
}
</style>

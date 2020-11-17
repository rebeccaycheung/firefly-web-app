<template>
    <div class="quick-links">
        <div class="link">
            <font-awesome-icon icon="plus" class="icon pink-icon"/>
            Transaction
        </div>
        <div class="link">
            <font-awesome-icon icon="cart-plus" class="icon pink-icon"/>
            Budget
        </div>
        <div class="link">
            <font-awesome-icon icon="list-ul" class="icon blue-icon"/>
            Accounts
        </div>
        <div class="link">
            <font-awesome-icon icon="calendar-plus" class="icon blue-icon"/>
            Bills
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'QuickLinks',
  methods: {
  },
});
</script>

<style scoped>
.quick-links {
    max-height: 100%;
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
    padding: 1rem;
    border-bottom: 3px solid #282A37;
    background-color: #44475A;
    border-radius: 8px;
    margin-left: 10px;
    margin-right: 10px;
    width: 100px;
    text-align: center;
}

.icon {
    margin-right: 5px;
}

.blue-icon {
    color: #6CECFF;
}

.pink-icon {
    color: #FF6DC9;
}
</style>

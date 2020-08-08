<template>
    <div class="quick-links">
        <div class="links">
            <div class="link">
                <font-awesome-icon icon="plus" class="icon pink-icon"/>
                Add transaction
            </div>
            <div class="link last">
                <font-awesome-icon icon="cart-plus" class="icon pink-icon"/>
                Edit budget
            </div>
        </div>
        <div class="links">
            <div class="link">
                <font-awesome-icon icon="list-ul" class="icon blue-icon"/>
                Edit accounts
            </div>
            <div class="link last">
                <font-awesome-icon icon="calendar-plus" class="icon blue-icon"/>
                Edit bills
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'QuickLinks',
});
</script>

<style scoped>
.quick-links {
    max-height: 100%;
}

.links {
    background-color: #44475A;
    border-radius: 8px;
    margin-bottom: 0.5rem;
}

.link {
    padding: 2rem;
    border-bottom: 3px solid #282A37;
}

.last {
    border-bottom: none;
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

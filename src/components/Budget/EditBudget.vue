<template>
  <div class="view-budget">
      <Heading title="Edit Budget" />
      <form>
        <div class="form">
          <div class="form-item">
            <label for="total">Total</label>
            <br>
            <input v-model.trim="total" type="number">
          </div>
          <div class="form-item">
            <label for="spending">Spending</label>
            <br>
            <input v-model.trim="spending" type="number">
          </div>
          <div class="form-item">
            <label for="bills">Bills</label>
            <br>
            <input v-model.trim="bills" type="number">
          </div>
        </div>
      </form>
      <button v-on:click="save" class="save">Save</button>
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins';
import axios from 'axios';
import Heading from '@/components/Heading.vue';
import authoriseMixins from '@/mixins/authoriseMixins';
import dateMixins from '@/mixins/dateMixins';
import round2DecimalMixins from '@/mixins/round2DecimalMixins';

export default mixins(authoriseMixins, dateMixins, round2DecimalMixins).extend({
  name: 'EditBudget',
  components: {
    Heading,
  },
  data() {
    return {
    };
  },
  methods: {
    fetchBudget() {
      const config = this.authorise();

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}budget`,
        config,
      )
        .then((response) => {
          console.log(response);
        });
    },
  },
  created() {
    // this.fetchBudget();
  },
});
</script>

<style scoped>
.view-budget {
    margin-top: 1.5rem;
    background-color: #44475A;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    border-radius: 8px;
    width: 60%;
}

.save {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    background-color: #C58FFF;
    color: #fff;
    font-weight: 600;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
}

.form-item {
    margin: 1rem 1.5rem 1rem 0rem;
}

label {
    font-weight: 600;
}

input {
    margin-top: 0.5rem;
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    border-radius: 6px;
    border: none;
}
</style>

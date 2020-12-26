<template>
    <div class="add-transaction">
        <Heading title="Add Transaction" />
        <form>
            <div class="form">
                <div class="form-item">
                    <label for="description">Description</label>
                    <br>
                    <input v-model.trim="description">
                </div>
                <div class="form-item">
                    <label for="source">Source account</label>
                    <br>
                    <select v-model="source">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="destination">Destination account</label>
                    <br>
                    <select v-model="destination">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="amount">Amount</label>
                    <br>
                    <input v-model="amount" type="number">
                </div>
                <div class="form-item">
                    <label for="category">Category</label>
                    <br>
                    <select v-model="category">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="transactionDate">Date</label>
                    <br>
                    <input type="date" id="transactionDate" name="transactionDate"
                        value=currentDate style="padding: 0.3rem;">
                </div>
                <div class="form-item">
                    <label for="budget">Budget</label>
                    <br>
                    <select v-model="budget">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                    </select>
                </div>
            </div>
            <button v-on:click="submitTransaction" class="submit">Add transaction</button>
        </form>
    </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import mixins from 'vue-typed-mixins';
import axios from 'axios';
import Heading from '@/components/Heading.vue';
import dateMixins from '@/mixins/dateMixins';
import authoriseMixins from '@/mixins/authoriseMixins';

export default mixins(dateMixins, authoriseMixins).extend({
  name: 'AddTransaction',
  components: {
    Heading,
  },
  data() {
    return {
      currentDate: this.getCurrentDate(),
      description: '',
      source: '',
      destination: '',
      amount: 0,
      category: '',
      date: '',
      budget: '',
      type: '',
      config: this.authorise(),
    };
  },
  methods: {
    getSourceAndDestination() {
      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}accounts`,
        this.config,
      )
        .then((response) => {
          console.log(response);
        });
    },
    getCategory() {
      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}categories`,
        this.config,
      )
        .then((response) => {
          console.log(response);
        });
    },
    getBudget() {
      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}budgets`,
        this.config,
      )
        .then((response) => {
          console.log(response);
        });
    },
    submitTransaction() {
      const transaction = {
        error_if_duplicate_hash: false,
        apply_rules: false,
        group_title: 'Split transaction title.',
        transactions: [
          {
            type: this.type,
            date: this.date,
            amount: this.amount,
            description: this.description,
            // order: 0,
            // currency_id: 12,
            currency_code: 'AUR',
            // foreign_amount: '123.45',
            // foreign_currency_id: 17,
            // foreign_currency_code: 'USD',
            // budget_id: 4,
            // category_id: 43,
            category_name: this.category,
            // source_id: 2,
            source_name: this.source,
            // destination_id: 2,
            destination_name: this.destination,
            // reconciled: false,
            // piggy_bank_id: 0,
            // piggy_bank_name: 'string',
            // bill_id: 111,
            bill_name: this.budget,
            // tags: null,
            // notes: 'Some example notes',
            // internal_reference: 'string',
            // external_id: 'string',
            // bunq_payment_id: 'string',
            // sepa_cc: 'string',
            // sepa_ct_op: 'string',
            // sepa_ct_id: 'string',
            // sepa_db: 'string',
            // sepa_country: 'string',
            // sepa_ep: 'string',
            // sepa_ci: 'string',
            // sepa_batch_id: 'string',
            // interest_date: '2020-12-25',
            // book_date: '2020-12-25',
            // process_date: '2020-12-25',
            // due_date: '2020-12-25',
            // payment_date: '2020-12-25',
            // invoice_date: '2020-12-25',
          },
        ],
      };
      const config = this.post();
      config.data = transaction;

      axios.post(
        `${process.env.VUE_APP_API_BASE_URL}transactions`,
        config,
      )
        .then((response) => {
          console.log(response);
        });
      console.log('submit');
    },
  },
});
</script>

<style scoped>
.add-transaction {
    margin-top: 1.5rem;
    background-color: #44475A;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    border-radius: 8px;
    width: 60%;
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

.submit {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    background-color: #C58FFF;
    color: #fff;
    font-weight: 600;
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

select {
    margin-top: 0.5rem;
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    border-radius: 6px;
    border: none;
}
</style>

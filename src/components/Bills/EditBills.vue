<template>
  <div class="view-bills">
      <Heading title="Edit Bills" />
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
  name: 'EditBills',
  components: {
    Heading,
  },
  data() {
    return {
    };
  },
  methods: {
    fetchBills() {
      const config = this.authorise();

      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}bills`,
        config,
      )
        .then((response) => {
          console.log(response);
        });
    },
  },
  created() {
    // this.fetchBills();
  },
});
</script>

<style scoped>
.view-bills {
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
</style>

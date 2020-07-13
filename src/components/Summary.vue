<template>
  <div class="summary">
    <div v-for="item in items" v-bind:key="item.id">
      {{ items }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Summary extends Vue {
  items: Record<string, any> = {}

  fetchAccounts = () => {
    const token = process.env.VUE_APP_TOKEN;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
      },
    };

    axios.get(
      `${process.env.VUE_APP_API_BASE_URL}accounts`,
      config,
    )
      .then((response) => {
        this.items = response.data.data;
        console.log(this.items);
      });
  }

  mounted() {
    this.fetchAccounts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary {
    background-color: #44475A;
    padding: 2rem;
    border-radius: 8px;
}
</style>

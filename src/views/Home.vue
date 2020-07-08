<template>
  <div class="home">
    <button @click=login()>Login</button>
    {{ info }}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      info: null,
    };
  },
  methods: {
    login() {
      const token = process.env.VUE_APP_TOKEN;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.get(`${process.env.VUE_APP_API_BASE_URL}accounts`,
        config)
        .then((response) => {
          this.info = response.data;
        });
    },
  },
};
</script>

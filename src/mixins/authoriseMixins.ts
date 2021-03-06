import Vue from 'vue';

export default Vue.extend({
  methods: {
    authorise() {
      const token = process.env.VUE_APP_TOKEN;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
        params: {},
      };

      return config;
    },
    post() {
      const token = process.env.VUE_APP_TOKEN;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
        params: {},
        data: {},
      };

      return config;
    },
  },
});

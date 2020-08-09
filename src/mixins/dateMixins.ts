import Vue from 'vue';

export default Vue.extend({
  methods: {
    getDate() {
      const date = new Date();
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString();
      const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const day = lastDate.getDate().toString();

      const startDate = `${year}-${month}-01`;
      const endDate = `${year}-${month}-${day}`;

      const currentDate = {
        start: startDate,
        end: endDate,
      };

      return currentDate;
    },
  },
});

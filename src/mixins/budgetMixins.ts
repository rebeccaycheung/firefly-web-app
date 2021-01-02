import axios from 'axios';
import mixins from 'vue-typed-mixins';
import authoriseMixins from '@/mixins/authoriseMixins';

export default mixins(authoriseMixins).extend({
  methods: {
    getBudgets() {
      const budgets: any[] = [];
      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}budgets`,
        this.authorise(),
      )
        .then((response) => {
          const { data } = response.data;
          Object.keys(data).forEach((value) => {
            const { name } = data[value].attributes;
            budgets.push({
              key: data[value].id,
              value: name,
            });
          });
        });
      return budgets;
    },
    getBudgetsLimit(id: number) {
      let limit = 0;
      axios.get(
        `${process.env.VUE_APP_API_BASE_URL}budgets/${id}/limits`,
        this.authorise(),
      )
        .then((response) => {
          limit = response.data[0].attributes.amount;
        });
      return limit;
    },
  },
});

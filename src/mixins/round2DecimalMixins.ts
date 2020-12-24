import Vue from 'vue';

export default Vue.extend({
  methods: {
    getRoundDecimal(value: number | string) {
      let v: number;
      if (typeof (value) === 'string') {
        v = parseFloat(value);
      } else {
        v = value;
      }
      const roundValue = Math.round((v + Number.EPSILON) * 100) / 100;
      return roundValue;
    },
  },
});

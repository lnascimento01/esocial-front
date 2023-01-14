import { defineComponent, defineAsyncComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';
import DataGet from './ChartGet.js'

export const type = 'BarChart';

export const options = {
  title: 'Domínios Ativos e acessos',
  curveType: 'function',
  legend: { position: 'bottom' },
  width: 600,
  height: 400,
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
    DataGet: defineAsyncComponent(() =>
      import("./ChartGet.js")
    ),
  },
  setup() {
    return async () =>
      h(GChart, {
        DataGet,
        options,
        type,
      });
  },
});

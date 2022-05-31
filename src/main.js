import Vue from 'vue';
import App from './App.vue';

import 'vue-turnjs/dist/vue-turnjs.esm.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

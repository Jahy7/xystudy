import Vue from 'vue'
import App from './App.vue'

import ElementPlus from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementPlus);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

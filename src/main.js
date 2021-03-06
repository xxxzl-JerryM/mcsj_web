import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局注册封装之后的axios
import api from './api'
Vue.prototype.$api = api

import AmapVue from '@amap/amap-vue';

AmapVue.config.version = '2.0'; // 默认2.0，这里可以不修改
AmapVue.config.key = 'e8232ff763e974a0b697c76f1be67337';
AmapVue.config.plugins = [
  'AMap.ToolBar',
  // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
];
Vue.use(AmapVue);

// 关闭生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

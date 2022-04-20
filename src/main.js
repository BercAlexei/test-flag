import Vue from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'
// настройки плагина

const settings = {
  apiKey: '3cc0eb20-61cf-4914-bde0-b384f06b6cf8',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

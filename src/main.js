import Vue from 'vue'
import App from './App.vue'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.scss'
import './assets/rem'
import './assets/reset.scss'

NutUI.install(Vue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

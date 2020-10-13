import Vue from 'vue'
import router from './router'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.scss'
import './assets/reset.scss'
import './assets/custom_theme.scss'
import './assets/rem'
import App from './App.vue'

NutUI.install(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

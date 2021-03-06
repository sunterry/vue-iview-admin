import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import iView from 'iview'
import '@/theme/index.less'
import locale from 'iview/dist/locale/zh-CN'
Vue.use(iView, {locale})
Vue.config.productionTip = false

/* eslint-disable */
process.env.NODE_ENV === 'development' ? require('@/mock') : ''

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

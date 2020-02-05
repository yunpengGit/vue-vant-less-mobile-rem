import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/style/base.less'
import { http } from '@/http'
import { Lazyload } from 'vant'
import SvgIcon from './svg'
import './svg/iconfont'
Vue.component('SvgIcon', SvgIcon)

Vue.use(Lazyload).use(SvgIcon)
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import zButton from '../packages/button'
// 注册组件库
Vue.use(zButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

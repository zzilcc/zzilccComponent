// 导入组件，组件必须声明name
import zButton from './src/z-button.vue'
zButton.install = function (Vue) {
  Vue.component(zButton.name, zButton)
}
// 默认导出组件
export default zButton

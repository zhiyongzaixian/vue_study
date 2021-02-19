import Vue from 'vue'
import App from './App.vue'


// 关闭提示
Vue.config.productionTip = false
// Vue.config.errorHandler = function (err, vm, info) {
//   console.log('全局错误捕获')
// 	console.log(info)
// }


Vue.prototype.$Bus = new Vue()
/* 
 组件实例： this
 应用实例： vm
 
 this.__proto__ = vm
 this.__proto__.__proto__ = Vue.prototype
 */

const vm = new Vue({
  render: h => h(App),
}).$mount('#app')

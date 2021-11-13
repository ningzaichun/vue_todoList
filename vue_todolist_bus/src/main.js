import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 关于全局总线的使用说明
// 使用全局总线的时候，更好的应用是在兄弟组件、祖孙组件之间，这些组件他们并不能做到直接通信，这个使用全局事件总线会方便很多
new Vue({
  render: h => h(App),
  // beforeCreate 位于数据挂载之前的生命周期函数
  beforeCreate () {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')

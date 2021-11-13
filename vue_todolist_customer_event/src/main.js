// 引入vue
import Vue from 'vue'
// 引入app组件
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 创建 Vue 实例对象 Vm
new Vue({
  template: '<App></App>',
  components: { App },
  render: (h) => h(App)
  // render (createElment) {
  //   console.log(createElment)
  //   return createElment('App')
  // }
  // 这里不是一下就能说完的，这里简单说下：
  // App 组件渲染，这里的 h 即是 vm.$createElement ,便是在vm.render这个阶段
  // 最粗略的理解，执行完这里，就是将app 放入了 容器中去了
}).$mount('#app')
// Vue 的$mount()为手动挂载  这个也不是一下能说清，我也学艺不精，以后再补上 哈哈

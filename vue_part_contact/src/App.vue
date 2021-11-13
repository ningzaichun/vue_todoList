<template>
  <div id="app">
    <!-- :msg 是传递给子组件的值 子组件在props 中写什么名称，这里就写什么名称
     "msg" 是我们自己定义的变量
     方法同样如此
     -->
     <h1>孙子组件传递过来的信息{{demoMsg}}</h1>
    <HelloWorld :msg="msg" @updateMsg="updateMsg" @demo="demo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'Hello World',
      demoMsg: ''
    }
  },
  methods: {
    updateMsg (value) {
      this.msg = value
    },
    demo (value) {
      this.demoMsg = value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

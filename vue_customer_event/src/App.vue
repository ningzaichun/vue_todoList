<template>
  <div id="app">
    <!-- props方法传递 -->
    <Demo :showMsg="showMsg"></Demo>
    <!-- 绑定自定义事件 -->
    <Demo1 v-on:send-message="sendMessage"></Demo1>
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
import Demo1 from "./components/Demo1.vue";

export default {
  name: "App",
  components: {
    Demo,
    Demo1,
  },
  methods: {
    showMsg() {
      alert("收到来自demo的信息");
    },
    sendMessage(value) {
      alert("sendMessage自定义事件被触发拉！！！收到来自demo2的信息:" + value);
    },
  },
};
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

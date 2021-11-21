<template>
  <div class="demo">
    <h1>Demo</h1>
    <p>{{ msg }}</p>
    <button type="button" @click="sendMsg">点击发送消息给App组件</button>
  </div>
</template>
<script>
export default {
  props: {
    showMsg: Function,
  },
  data() {
    return {
      msg: "hello,大家好,我是宁在春",
    };
  },
  methods: {
    sendMsg() {
      this.showMsg();
    },
  },
};
</script>
<style>
.demo {
  width: 200px;
  height: 200px;
  background-color: #1488f5;
}
</style>

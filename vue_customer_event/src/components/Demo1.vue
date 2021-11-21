<template>
  <div class="demo1">
    <h1>Demo2</h1>
    <span>{{ msg }}</span>

    <button @click="sendAppMsg(msg)" type="button">
      点击发送消息给App组件
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "大家好，我是来自Demo2的宁在春",
    };
  },
  methods: {
    sendAppMsg(message) {
      this.$emit("send-message", message);
    },
  },
};
</script>
<style>
.demo1 {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>

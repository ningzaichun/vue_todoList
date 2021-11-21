<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="updateMessage()">点击修改</button>
    <button @click="updateMessage2('你好丫，宁在春')">点击修改</button>
  </div>
</template>
<script>
export default {
  props: {
    msg: String
  },
  methods: {
    updateMessage () {
      this.$bus.$emit('updateMsg')
    },
    updateMessage2 (value) {
      this.$bus.$emit('updateMsg2', value)
    }
  }
}
</script>

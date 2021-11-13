<template>
  <div>
    <button @click="ceshi">点击</button>
  </div>
</template>
<script>
export default {
  methods: {
    ceshi () {
      this.$emit('demo', '测试')
    }
  }
}
</script>

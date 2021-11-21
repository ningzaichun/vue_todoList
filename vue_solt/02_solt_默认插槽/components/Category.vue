<template>
  <div class="category">
    <!-- 定义插槽，插槽默认内容 -->
<slot>如果当父组件不传值过来，即显示此默认</slot>
  </div>
</template>
<script>
export default {
  props: {
  }
}
</script>
<style scoped>
.category{
  width: 200px;
  height: 300px;
  background-color:pink;
}
img{
  width: 200px;
  height: 120px;
}
.movies{
  width: 200px;
  height: 200px;
}

</style>
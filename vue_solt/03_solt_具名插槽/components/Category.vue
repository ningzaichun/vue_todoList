<template>
  <div class="category">
    <slot name="slot1">如果当父组件不传值过来，即显示此默认</slot>
    <slot name="slot2"></slot>
  </div>
</template>
<script>
export default {
  props: {
    // listData:Array,
    // title: String
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
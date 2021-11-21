<template>
  <div class="category">
    <slot name="slot1">如果当父组件不传值过来，即显示此默认</slot>
    <slot name="slot2" :foods="foods">如果当父组件不传值过来，即显示此默认</slot>
  </div>
</template>
<script>
export default {
  props: {
    // listData:Array,
    // title: String
  },
  data () {
    return{
      // games:['穿越火线','qq飞车','洛克王国'],
      // movies:['你好，李焕英','青春派','匆匆那年'],
      foods:['邵阳米粉','长沙茶颜','重庆火锅']
    }
  }
}
</script>
<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: pink;
}
img {
  width: 200px;
  height: 120px;
}
.movies {
  width: 200px;
  height: 200px;
}
</style>
<template>
  <div class="category">
    <h1>{{title}}</h1>
    <ul>
      <li 
      v-for="(item,index) in listData"
      :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    listData:Array,
    title: String
  }
}
</script>
<style scoped>
.category{
  width: 200px;
  height: 300px;
  background-color:pink;
}

</style>
<template>
  <div id="app">
    <Category :listData="games" :title="'Games'" />
    <Category :listData="movies" :title="'Movies'" />
    <Category :listData="foods" :title="'Foods'" />
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  },
  data () {
    return {
      games:['穿越火线','qq飞车','洛克王国'],
      movies:['你好，李焕英','青春派','匆匆那年'],
      foods:['邵阳米粉','长沙茶颜','重庆火锅']
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
  display: flex;
  justify-content: space-between;
}
</style>

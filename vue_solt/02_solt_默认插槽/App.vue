<template>
  <div id="app">
    <Category>
      <h1>Games</h1>
      <!-- <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul> -->
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb352264fa7bfdb6d211f2e71e87cc2c48d85b805.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639931135&t=0b2c6c622c84a1e387196cce8f50455e">
    </Category>
    <Category>
      <h1>Movies</h1>
   <img class="movies" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13236694597%2F641.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639931502&t=f89c2197bda9bb129d9404d3c4b30f2f">
      <!-- <ul> -->
        <!-- <li v-for="(item, index) in movies" :key="index">{{ item }}</li> -->
      <!-- </ul> -->
    </Category>
    <Category>
      <h1>Foods</h1>
        <ul>
          <li v-for="(item, index) in foods" :key="index">{{ item }}</li>
        </ul>
    </Category>
<!-- 当我们什么都没有写的时候，看展示什么 -->
        <Category>
    </Category>
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

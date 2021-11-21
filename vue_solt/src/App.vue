<template>
  <div id="app">
    <Category>
      <template slot="slot1">
        <h1>Foods</h1>
      </template>
      <template slot="slot2" scope="listData">
        <!--如果不知道的 咱们可以输出看看这是什么· {{listData}}  -->
        <ul>
          <li v-for="(item, index) in listData.foods" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category>
      <template slot="slot1">
        <h1>Foods</h1>
      </template>
      <template slot="slot2" scope="listData">
        <!--如果不知道的 咱们可以输出看看这是什么· {{listData}}  -->
        <ol>
          <li v-for="(item, index) in listData.foods" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category>
      <template slot="slot1">
        <h1>Foods</h1>
      </template>
      <template slot="slot2" scope="listData">
        <!--如果不知道的 咱们可以输出看看这是什么· {{listData}}  -->
        <h4 v-for="(item, index) in listData.foods" :key="index">
          {{ item }}
        </h4>
      </template>
    </Category>
    <Category>
      <template slot="slot2" scope="listData">
        {{ listData }}
      </template>
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

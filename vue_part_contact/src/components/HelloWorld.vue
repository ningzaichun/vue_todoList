<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="updateMessage">点击修改msg的值</button>
    <Demo @demo="demo"></Demo>
  </div>
</template>

<script>
import Demo from '../components/Demo'
export default {
  components: {
    Demo
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    updateMessage () {
      // this.updateMsg('大家好,我是博主宁在春')
      this.$emit('updateMsg', '大家好,我是博主宁在春')
    },
    demo () {
      this.$emit('demo', '还是得这么传递码')
    }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

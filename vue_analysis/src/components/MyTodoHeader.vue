<template>
  <div class="todo-header-box">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"  v-model="title" @keyup.enter="add"/>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    // 通过props来接收
    addTodo: Function
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    add () {
      // 1. 检查输入合法性
      const title = this.title.trim()
      if (!title) {
        alert('请输入内容')
        return
      }
      const id = uuidv4()
      // 2. 根据输入生成一个todo对象
      const todo = { id, title, done: false }
      // 3. 添加到todos
      this.addTodo(todo)
      // 4. 清除输入
      this.title = ''
    }
  }
}
</script>
<style scoped>
.todo-header-box{
  width: 500px;
  height: 40px;
  margin-top:10px;
}
.todo-header-box input{
  width: 460px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid #43B984;
  border-radius: 8px;
  padding-left: 10px;
}
:focus-visible{
outline:none;
}
</style>

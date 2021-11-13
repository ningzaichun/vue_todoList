<template>
    <div class="todo-container">
      <!-- header模块 -->
    <TodoHeader :addTodo="addTodo" />
    <!-- main 模块 -->
   <TodoList :todos="todos" :deleteTodo="deleteTodo" :checkTodo="checkTodo"/>
    <!-- 主要的内容模块 -->
    <TodoFooter :todos="todos" :clearDoneTodos="clearDoneTodos" :checkAllTodos="checkAllTodos" />
    <!-- footer模块 -->
  </div>
</template>
<script>
import TodoHeader from './components/MyTodoHeader'
import TodoList from './components/MyTodoList'
import TodoFooter from './components/MyTodoFooter'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todos: [
        { id: '001', title: '吃饭', done: true },
        { id: '002', title: '睡觉', done: false },
        { id: '003', title: '敲代码', done: true }
      ]
    }
  },
  methods: {
    // 回车增加一个todo
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    // 判断勾选不勾选
    checkTodo (id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    // 删除一个todo
    deleteTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // 全选全不选
    checkAllTodos (done) {
      this.todos.forEach((todo) => { todo.done = done })
    },
    // 清除所有已完成的任务
    clearDoneTodos () {
      this.todos = this.todos.filter(todo => !todo.done)
    }

  }

}
</script>
<style>
*{
margin: 0 0;
padding: 0 0;
}
.todo-container{
  margin:0 auto;
  margin-top: 10px;
  width: 500px;
  height: 500px;
  background-color: #CCC;
  border: 1px solid #ddd;
  border-radius:8px;
}
</style>

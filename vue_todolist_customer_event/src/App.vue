<template>
  <div class="todo-container">
    <!-- header模块   改成@ 就是用自定义事件-->
    <TodoHeader @addTodo="addTodo" />
    <!-- main 模块  -->
    <TodoList :todos="todos" :deleteTodo="deleteTodo" @checkTodo="checkTodo" />
    <!-- 主要的内容模块 -->
    <TodoFooter
      :todos="todos"
      @clearDoneTodos="clearDoneTodos"
      @checkAllTodos="checkAllTodos"
    />
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
      // 有就取 没有就为空数组 避免因为null而造成报错
      todos: JSON.parse(localStorage.getItem('todos')) || []
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
    // 删除一个todo 这个需要传递两层 我测试的过程中，不能跨两层组件往下传，只能先传给list组件，再由list组件传给 item组件 才能生效
    deleteTodo (id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    // 全选全不选
    checkAllTodos (done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    // 清除所有已完成的任务
    clearDoneTodos () {
      this.todos = this.todos.filter((todo) => !todo.done)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler (value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
}
</script>
<style>
* {
  margin: 0 0;
  padding: 0 0;
}
.todo-container {
  margin: 0 auto;
  margin-top: 10px;
  width: 500px;
  height: 500px;
  background-color: #ccc;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>

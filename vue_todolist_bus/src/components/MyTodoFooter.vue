<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--  // 第一种方式：通过dom元素来判断有没有进行勾选 不是最佳方式 -->
      <!-- <input type="checkbox" :checked="isAllCheck" @click="checkAll" /> -->
      <!-- 第二种方式： 通过绑定计算属性来进行展示 -->
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span
      >已完成{{ doneTotal }}<span> / 全部{{ todos.length }} </span>
    </span>
    <button
      class="btn btn-danger"
      @click="deleteDoneAll"
    >
      清除已完成任务
    </button>
    <button @click="updateMessag">点击修改</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    clearDoneTodos: Function,
    checkAllTodos: Function
  },
  computed: {
    total () {
      return this.todos.length
    },
    doneTotal () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.done ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.doneTotal === this.todos.length && this.doneTotal > 0
      },
      // 通过计算属性来判断是否全选或全不选
      set (checked) {
        this.checkAllTodos(checked)
      }
    }
  },
  methods: {
    deleteDoneAll () {
      this.clearDoneTodos()
    },
    updateMessag () {
      this.$bus.$emit('updateMsg')
    }
    // 通过dom元素来判断有没有进行勾选 不是最佳方式
    // checkAll (e) {
    //   console.log(e.target.checked)
    //   this.checkAllTodos(e.target.checked)
    // }
  }
}
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

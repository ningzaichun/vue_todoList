<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="{ background: bgColor }"
  >
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handlerCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
      <span>{{ msg }}</span>
    </label>
    <button
      class="btn btn-danger"
      style="display: none"
      v-show="isShow"
      @click="handlerDeleteItem(todo.id)"
    >
      删除
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false,
      msg: '            宁在春'
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#aaa'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    // 修改勾选状态
    handlerCheck (id) {
      console.log(id)
      // this.checkTodo(id)
      // 使用全局事件 总线 不再需要麻烦中间组件 list 就可以做到直接通信
      this.$bus.$emit('checkTodo', id)
    },
    handlerDeleteItem (id) {
      if (window.confirm('确定删除吗')) {
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)
      }
    },
    updateMsg () {
      this.msg = '大家好啊,我叫宁在春'
    }
  },
  mounted () {
    this.$bus.$on('updateMsg', this.updateMsg)
  },
  // 养成习惯 在组件销毁的时候，将事件进行解绑
  beforeDestroy () {
    this.$bus.$off('updateMsg')
  }

}
</script>

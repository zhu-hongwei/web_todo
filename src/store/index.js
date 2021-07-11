import { createStore } from 'vuex'

export default createStore({

  // 定义所需要的状态的
  state: {
    list: [
      {
        title: "eat food",
        done: false,
      },
      {
        title: "drink",
        done: false,
      },
      {
        title: "code",
        done: true,
      },
    ]
  },

  // 同步修改 state 都是方法，不能有 定时器，请求等异步操作
  // 第一个参数 state 第二个参数是需要修改的值
  mutations: {
    addOneTodo(state, payload) {
      state.list.push(payload)
    },

    delOneTodo(state, payload) {
      state.list.splice(payload, 1)
    },

    tapListItem(state, payload) {
      // 做个已完成 排序好了
      // setTimeout(function () {
      //   state.list.splice(payload, 1)
      // }, 3000)
    },

    clear(state, payload) {
      // 把过滤之后的数组传进来
      state.list = payload
    }
  },

  // 异步提交 mutation 可以发请求了，定时器
  // 第一个参数是 store 第二个参数是修改的值
  actions: {

  },

  // 模块化
  modules: {
  }
})

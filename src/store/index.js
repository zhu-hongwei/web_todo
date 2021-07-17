import { createStore } from 'vuex'

export default createStore({

  // 定义所需要的状态的
  state: {
    list: [
      {
        title: "今日待办事项",
        done: false,
      },
      {
        title: "未完成",
        done: false,
      },
      {
        title: "已完成",
        done: true,
      },
    ]
  },

  // 同步修改 state 都是方法，不能有 定时器，请求等异步操作
  // 第一个参数 state 第二个参数是需要修改的值
  mutations: {

    addOneTodo(state, payload) {
      console.log('store index.js addOneTodo 新增一条', state, payload);
      state.list.push(payload)
    },

    delOneTodo(state, payload) {
      console.log('store index.js delOneTodo 删除一条', state, payload);
      state.list.splice(payload, 1)
    },

    tapListItem(state, payload) {
      console.log('store index.js tapListItem 反转 状态', state, payload);
      console.log(payload.title, payload.done);
      
      payload.done = !(payload.done)
      // return
      // state.list[payload].done = !(state.list[payload].done)
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

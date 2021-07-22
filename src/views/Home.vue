<template>
  <div class="home">
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del" @tapListItem="tapListItem"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>

    <!-- · -->
    <button class="more" @click="goto_more">:-)</button>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  // 组件名称
  name: "Home",

  // 接收父组件的数据
  props: {},

  // 定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  // 组件创建的过程
  setup(props, ctx) {
    onMounted(() => {
      // 组件挂载的过程
      // 数据 dom...
      // 发请求
      // 数据初始化的操作：接受路由传递参数
    });

    onUnmounted(() => {
      // 组件卸载时的生命周期
      // 清除定时器 清除闭包函数...
      console.log("Home onUnmounted");
    });

    // router 是全局路由对象
    let router = useRouter();
    console.log("Home router", router);

    // route 是当前路由对象
    let route = useRoute();
    console.log("Home route", route);

    let store = useStore();
    console.log("Home store", store);
    let value = ref("");
    // 拿到 store 里的数据
    let list = computed(() => {
      return store.state.list;
    });

    // 添加一条
    let add = (val) => {
      value.value = val;
      console.log(val);

      store.commit("addOneTodo", {
        title: value.value,
        done: false,
      });
    };

    // 删除任务
    let del = (val) => {
      console.log(val);
      // 调用删除的 mutation
      store.commit("delOneTodo", val);
    };

    let tapListItem = (item, index) => {
      console.log(item, index);
      store.commit("tapListItem", item, index);
    };

    let clear = (val) => {
      store.commit("clear", val);
    };

    // 跳转 more 页
    let goto_more = () => {
      // 跳转路由
      // push 函数里面可以传入跳转的路径
      // back: 回退到上一页
      // forward: 去到下一页
      // go(整数)   +前进   -后退

      router.push({
        // query 传参 path, name 都可以
        // 参数会在地址栏显示
        // 刷新之后还在
        name: "More",
        query: {
          name: "query",
          num: 1,
          obj: JSON.stringify({ test: "test" }),
        },

        // params 传参只能用 name
        // 参数不会在地址栏显示
        // 刷新之后就没有了
        // params: {
        //   name: "params",
        //   num: 1,
        //   obj: JSON.stringify({ test: "test" }),
        // },
      });
    };

    return {
      value,
      list,
      add,
      tapListItem,
      del,
      clear,

      goto_more,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  // min-height: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  .more {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: #0079ff;

    // margin: 10px 0;
    // height: 50px;
    // background-color: #0079ff;
  }
}
</style>

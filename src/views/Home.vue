<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <button class="about" @click="goto">about</button>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  
  reactive,
  toRefs,
  computed,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  setup(props, ctx) {
    let data = reactive({
      name: "j",
      age: 10,
    });

    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    console.log(store);

    // router 是全局路由对象
    let router = useRouter();
    console.log("home router", router);

    // route 是当前路由对象
    let route = useRoute();
    console.log("home route", route);

    // query 传递过来的参数都是字符型的类型
    console.log("route.query", route.query);

    let name = ref("name");
    let obj = ref({
      a: "a",
      b: 1,
      c: [0, 0, 0, 0],
    });

    // 组件卸载时的生命周期
    // do: 清除定时器 清除闭包函数
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    // 跳转 about 页
    let goto = () => {
      // 跳转路由
      // push 函数里面可以传入跳转的路径
      // back: 回退到上一页
      // forward: 去到下一页
      // go(整数)   +前进   -后退
      router.push({
        // path: '/about'

        name: "About",
        params: {
          name: name.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };

    return {
      ...toRefs(data), // es6
      list,
      store,
      router,
      route,
      goto,

      name,
      obj,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .about {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: #2db7f5;
  }
}
</style>

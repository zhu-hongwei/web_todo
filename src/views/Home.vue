<template>
  <div class="home">
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>

    <button class="about" @click="goto">about</button>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
// import { useStore } from "vuex";
// import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  setup(props, ctx) {
    let store = useStore();
    // router 是全局路由对象
    let router = useRouter();
    console.log("home router", router);
    // route 是当前路由对象
    let route = useRoute();
    console.log("home route", route);

    let value = ref("");

    let list = computed(() => {
      return store.state.list;
    });

    let add = (val) => {
      value.value = val;
      console.log(val);

      store.commit("addOneTodo", {
        title: value.value,
        done: false,
      });
    };

    let del = (val) => {
      console.log(val);
      store.commit("delOneTodo", val);
    };

    let clear = (val) => {
      store.commit("clear", val);
    };

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
          name: "name",
          num: 1,
        },
      });
    };

    return {
      value,
      list,
      add,
      del,
      clear,

      goto,
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

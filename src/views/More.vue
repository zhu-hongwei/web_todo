<template>
  <div class="more">
    <div>more page</div>
    <div class="list">
      <div class="list-item">
        <!-- <img src="" alt=""> -->
        <div class="title">版本记录</div>
        <!-- <img src="" alt=""> -->
      </div>

      <div class="list-item">
        <!-- <img src="" alt=""> -->
        <div class="title">关于</div>
        <!-- <img src="" alt=""> -->
      </div>
    </div>
    <div>
      <div>{{ name }}</div>
      <div>{{ num }}</div>
      <div>{{ obj }}</div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  // reactive,
  // toRefs,
  // computed,
} from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    let router = useRouter();
    console.log("More router", router);

    // query 传递过来的参数都是字符串的类型
    let route = useRoute();
    console.log("More route", route);
    console.log("query", route.query);
    console.log("params", route.params);

    console.log(JSON.parse(route.query.obj));

    let name = ref(null);
    let num = ref("");
    let obj = ref({});

    onMounted(() => {
      // 接受路由传递过来的参数

      name.value = route.query.name;
      num.value = route.query.num;
      obj.value = JSON.parse(route.query.obj);

      console.log(name);
      console.log(num);
      console.log(obj);
    });

    return {
      router,
      route,

      name,
      num,
      obj,
    };
  },
});
</script>

<style lang="scss" scoped>
.more {
  height: 100%;
  width: 100%;
  background-color: #f5f5f7;
}

.list {
  border-radius: 20px;
  background-color: #fff;
  margin: 10px;
}

.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  height: 50px;
  border-bottom: 1px solid #f5f5f7;
}

.list-item:last-child {
  border-bottom: 0px solid #f5f5f7;
}
</style>
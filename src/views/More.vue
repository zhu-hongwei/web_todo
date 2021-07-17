<template>
  <div class="more">
    <div>more page</div>
    <!-- {{ name }} -->
    <!-- {{ obj }} -->
    <div class="list">
      <div class="list-item">
        <!-- <img src="" alt=""> -->
        <div class="title">版本记录</div>
        <div class="right">></div>
        <!-- <img src="" alt=""> -->
      </div>

      <div class="list-item">
        <!-- <img src="" alt=""> -->
        <div class="title"></div>
        <!-- <img src="" alt=""> -->
      </div>
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
    console.log("about router", router);
    let route = useRoute();
    console.log("about route", route);
    console.log(route.params);

    let name = ref("");
    let obj = ref({});

    onMounted(() => {
      // name.value = route.params.name;
      // obj.value = JSON.parse(route.params.obj);
    });

    return {
      router,
      route,
      name,
      obj,
    };
  },
});
</script>

<style lang="scss" scoped>
.more {

}
.list {
  margin: 10px;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
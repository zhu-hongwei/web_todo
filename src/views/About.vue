<template>
  <div class="about">
    <div>about page</div>
    {{ name }}
    {{ obj }}
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
      name.value = route.params.name;
      obj.value = JSON.parse(route.params.obj);
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

<template>
  <div>
    <h1>this is Detail components</h1>
    <child :father_msg="father_msg" @sendToFather="sendToFather"></child>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import child from "../components/child/Child";

export default defineComponent({
  name: "Detail",
  components: {
    child,
  },

  setup() {
    // 父传给子 动态绑定属性的方式 子组件 props 里接收
    let father_msg = ref("这是父组件的数据");
    let sendToFather = (val) => {
      console.log(val);
    };

    return {
      father_msg,
      sendToFather,
    };
  },
});
</script>

<style>
</style>
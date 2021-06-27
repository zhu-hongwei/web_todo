<template>
  <div>
    <h1>this is Detail components</h1>
    <child :father="father" @sendToFather="sendToFather"></child>
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
    let father = ref("father");
    let sendToFather = (val) => {
      console.log(val);
    };

    return {
      father,
      sendToFather,
    };
  },
});
</script>

<style>
</style>
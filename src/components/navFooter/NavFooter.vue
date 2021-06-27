<template>
  <div class="container">
    <div>has done {{ isDone }} / all {{ all }}</div>
    <div class="but-box" v-if="isDone > 0">
      <button @click="clear_all_has_done">clear has done</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navFooter",
  setup(props, ctx) {
    let isDone = ref(1);
    let all = ref(3);

    let clear_all_has_done = () => {
      console.log('clear_all_has_done')
    }

    return {
      isDone,
      all,

      clear_all_has_done,

    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 20px;
  .but-box {
    margin-left: 10px;
  }
}
</style>

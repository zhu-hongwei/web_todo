<template>
  <div class="container">
    <div>has done {{ done }} / all {{ list.length }}</div>
    <div class="but-box" v-if="done > 0">
      <button @click="clear">clear has done</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },

  setup(props, ctx) {

    let done = computed(() => {
      // 过滤已完成的
      let arr = props.list.filter((item) => {
        return item.done;
      });

      return arr.length;
    });

    // 清除已完成
    let clear = () => {
      console.log("clear");
      ctx.emit('clear')
    };

    return {
      done,

      clear,
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

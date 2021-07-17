<template>
  <div class="h_footer">
    <div class="h_footer_tip"> 已完成 {{ done }} / 全部 {{ list.length }}</div>
    <div class="but-box" v-if="done > 0">
      <button @click="clear"> 清除已完成 </button>
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

      // 过滤未完成的
      let arr = props.list.filter((item) => {
        return item.done === false;
      });

      ctx.emit("clear", arr);
    };

    return {
      done,

      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
.h_footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  // background-color: red;
  margin-top: 20px;
  
  .but-box {
    margin-left: 10px;
  }
}
</style>

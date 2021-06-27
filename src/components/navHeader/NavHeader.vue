<template>
  <div class="input-box">
    <input type="text" v-model="value" @keydown.enter="push_a_list_item" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navHeader",


  setup(props, ctx) {
    let value = ref("");

    let push_a_list_item = () => {
      // 把输入框的内容传递给父组件
      ctx.emit("add", value.value);
      console.log(value.value);
      value.value = ''

    };

    return {
      value,
      push_a_list_item,
    };
  },
});
</script>

<style lang="scss" scoped>
.input-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 80%;

  input {
    margin: 20px 0;
    padding: 0 20px;
    width: 100%;
  }
}
</style>
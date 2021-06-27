<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <input type="checkbox" v-model="item.done" />
      {{ item.title }}
      <button class="del" @click="del(item, index)">del</button>
    </div>
  </div>
</template> 

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  // 专门用来放分发事件的属性名字
  emits: ['del'],

  setup(props, ctx) {

    // 删除任务
    let del = (item, index) => {
      // console.log(item, index);
      ctx.emit('del', index)
    };

    return {
      del,
    };
  },
});
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  // padding: 0 20px;
  width: 80%;
}

.list-item {
  position: relative;
  // margin: 20px;
  padding: 0 20px;
  border-radius: 50px;

  display: flex;
  flex-direction: row;
  // justify-content: center;
  align-items: center;
  cursor: pointer;
  button {
    position: absolute;
    right: 20px;
    // margin-left: 20px;

    display: none;
    z-index: 99; // why?
    &:hover {
      background-color: #fff;
    }
  }
  &:hover {
    background-color: #f5f5f7;
    button {
      display: block;
    }
  }
}
</style>
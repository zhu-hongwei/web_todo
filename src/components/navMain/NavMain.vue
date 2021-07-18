<template>
  <div class="list">
    <div
      class="list-item"
      :class="{ list_item_done: item.done }"
      v-for="(item, index) in list"
      :key="index"
    >
      <!-- 替换 input checkbox 默认丑丑的方框 -->
      <span>
        <input
          class="Checkbox"
          :id="'list-item-' + index"
          type="checkbox"
          v-model="item.done"
        />

        <label :for="'list-item-' + index"></label>
        <!-- <label for="check1" @click.stop="tapListItem(item, index)"></label> -->
        <span class="list-item-title">{{ item.title }}</span>
      </span>

      <button class="del" @click.stop="del(item, index)">移除</button>
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
  emits: ["del", "tapListItem"],

  setup(props, ctx) {
    let isDone = ref(false);

    // 点击某一条 标记已完成
    let tapListItem = (item, index) => {
      console.log(item, index);
      ctx.emit("tapListItem", item, index);
    };

    // 删除任务
    let del = (item, index) => {
      console.log(item, index);
      ctx.emit("del", index);
    };

    return {
      isDone,
      tapListItem,
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

.list_item_done {
  opacity: 0.2;
  transition: opacity 1s;
}

.list-item {
  position: relative;
  padding: 0 20px;
  border-radius: 50px;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f7;

    button {
      display: block;
    }
  }

  input {
    margin-right: 0;
    border-radius: 50%;
    width: 0;
    height: 0;
  }

  button {
    position: absolute;
    right: 10px;
    margin-left: 20px;
    background-color: #f5f5f7;
    opacity: 1 !important;

    display: none;
    z-index: 99; // why?
    &:hover {
      background-color: #fff;
    }
  }

}

.list-item > span {
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.list-item-title {
  margin-left: 35px;
}

.Checkbox {
  background-color: red !important;
}

.Checkbox + label {
  position: absolute;

  width: 20px;
  height: 20px;

  border: 2px solid #0079ff;
  border-radius: 50%;
  background-color: #fff;
}

.Checkbox:checked + label:after {
  content: "";
  position: absolute;

  width: 80%;
  height: 80%;

  margin: 10%;
  border-radius: 50%;
  background-color: #0079ff;
}
</style>
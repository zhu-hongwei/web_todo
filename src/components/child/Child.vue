<template>
  <div class="child">
    <h1>this is Child components</h1>
    <!-- 父组件传递过来的数据可以直接用 -->
    <div>父组件传递过来的数据：{{ father_msg }}</div>

    <button @click="sendToFather">传值给父组件</button>
  </div>
</template>
 
<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Child",

  //  接受父组件传递过来的参数
  //  props 接收的数据不能直接改
  props: {
    father_msg: {
      type: String,
      // required: true,  是否必传 默认 false
      // default: "默认值",
    },
  },
  setup(props, ctx) {
    // 子传父 ctx.emit 分发事件
    console.log(props, props.father_msg);

    let childMsg = ref("我是子组件的数据");
    let childNum = ref(123456789);

    let sendToFather = () => {
      // 而是通过 ctx.emit 分发事件
      // emit 第一个参数是事件名称  第二个参数是传递的数据

      ctx.emit("sendToFather", childMsg.value);
    };

    onMounted(() => {
      // 传递一个
      ctx.emit("sendToFather", childMsg.value);

      // 传递多个 用数组
      ctx.emit("sendToFather", [childMsg.value, childNum.value]);

      // 传递多个 还可以用对象
      ctx.emit("sendToFather", {
        msg: childMsg.value,
        num: childNum.value,
      });
    });

    return {
      childMsg,
      sendToFather,
    };
  },
});
</script>

<style>
.child {
  background-color: red;
}
</style> 
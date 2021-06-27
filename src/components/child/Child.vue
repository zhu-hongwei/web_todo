<template>
  <div>
    <h1>this is Child components</h1>
    <div>父组件传递过来的数据：{{ father }}</div>
    <button @click="sendToFather">传值给父组件</button>

  </div>
</template>
 
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Child",

  //  接受父组件传递过来的参数
  //  props 接收的数据不能直接改
  props: {
    father: {
      type: String,
      // required: true,
      // default: "默认值",
    },
  },
  setup(props, ctx) {
    console.log(props, props.father);

    let childMsg = ref('我是子组件的数据')
    let sendToFather = () => {
      // 而是通过 ctx.emit 分发事件
      // emit 第一个参数是事件名称  第二个参数是传递的数据

      ctx.emit('sendToFather', childMsg.value)
    }

    return {
      childMsg
    }
  },
});
</script>

<style>
</style> 
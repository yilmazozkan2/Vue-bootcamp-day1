<template>
  <div class="container">
       <button @click="sendData()">Tıkla2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: "Child dan Parent a",
    };
  },
  props:{
         sendData:{
                type: Function,
                required: true,
         }
  },
//   methods: {
//     sendData() {
//       this.$emit("test-event", this.btnData);
//     },
//   },
};
</script>
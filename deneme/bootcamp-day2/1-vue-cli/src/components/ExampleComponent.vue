<template>
  <div class="container">
    <p>{{ myData }}</p>

    <button @click="sendData">Tıkla</button>
    <button @click="testProvideFunc">Tıkla2</button>

  </div>

</template>
<script>
export default {
  data() {
    return {
      data: "Child daki Fonksiyon Parent dan Çalıştırıldı",
      
    };
  },
  inject:["testProvideFunc"],
  props: ["myData"],
  // props:{
  //        myData:{
  //               type: String,
  //               required: false,
  //        }
  // }

  methods: {
    sendData() {
      this.$emit("test-event", this.data);
    },
  },
};
</script>
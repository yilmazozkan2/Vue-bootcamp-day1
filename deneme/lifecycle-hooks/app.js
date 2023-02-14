const app = Vue.createApp({
  data() {
    return {
      title: "Hello",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate çalıştı");
  },
  created() {
    console.log("created çalıştı");
    setTimeout(() => {
      this.itemList = [1, 11, 23, 214, 15];
    }, 2000);

    setTimeout(() => {
       this.title = "Başlık Değişti";
    }, 3000);
  },
  beforeMount() {
    console.log("beforeMount çalıştı");
  },
  mounted() {
    console.log("mounted çalıştı");
  },
  beforeUpdate() {
    console.log("beforeUpdate çalıştı");
  },
}).mount("#app");

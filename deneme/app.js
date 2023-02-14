const app = Vue.createApp({
  data() {
    return {
      title: "Camp 1.Gün",
    };
  },
  methods: {
       changeTitle(){
              this.title = "Değiştirilmiş Başlık"
       },
  },
}).mount("#app");

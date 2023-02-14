const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    // getCounterResult(){
    //        return this.counter > 5 ? 'Büyük' : 'Küçük';
    // }
    // incValue(){
    //        this.counter++;
    // },
    // decValue(){
    //        this.counter--;
    // }
    
  },
  computed : {
    getCounterResult() {
       console.log("counter1 çalıştı");
      return this.counter > 5 ? "Büyük" : "Küçük";
    },
    getCounter2Result() {
       console.log("counter2 çalıştı");
       return this.counter2 > 5 ? "Büyük" : "Küçük";
     }
  },
}).mount("#app");

<template>
  <app-header />

  <div id="app" class="container">
    <h3>Bu benim ilk vue cli uygulamam</h3>
  </div>
  <HomeItem />
  <!-- veya -->
  <!-- <home-item/> -->
  <ExampleComponent
    @test-event="testEventFunc"
    :myData="myData"
    @provideFunction="provideFunc"
  />
  <NoEmitComponent :sendData="sendDataFunc" />
</template>

<script>
import HomeItem from "@/components/HomeItem";
import ExampleComponent from "@/components/ExampleComponent";
import NoEmitComponent from "@/components/NoEmitComponent.vue";

export default {
  data() {
    return {
      myData: "Parent dan Child a",
    };
  },
  components: {
    HomeItem,
    ExampleComponent,
    NoEmitComponent,
  },
  provide() {
    return {
      testProvideFunc: this.provideFunc,
    };
  },
  methods: {
    testEventFunc(data) {
      alert(data);
    },
    sendDataFunc() {
      alert("Bu Parent Fonksiyonu Başka Component den Çalıştırıldı");
    },
    provideFunc(){
      alert("Provide Func Çalıştı");
    }
  },
};
</script>
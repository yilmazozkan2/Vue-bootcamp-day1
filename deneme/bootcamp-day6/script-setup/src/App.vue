<template>
  <p>{{ title }}</p>
  <input type="text" v-model="title"/>
  <hr/>
  <button @click="counter++">{{ counter }}</button>
</template>
<script setup>
import { ref, reactive } from "vue";
const title = ref("Bu Bir Script Setup Başlığıdır");
const counter = ref(0);

const state = reactive({
  personal: {
    name: "Felakettin",
    surname: null,
              },
       });
       console.log(state.personal.name);
</script>
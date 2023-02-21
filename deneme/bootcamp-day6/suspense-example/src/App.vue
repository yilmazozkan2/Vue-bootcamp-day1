<script setup>
import { defineAsyncComponent } from "vue";
import TheUsers from "./components/TheUsers.vue";
// import TodoDatas from "./components/TodoDatas.vue";
const TodoDatas = defineAsyncComponent(() =>
  import("./components/TodoDatas.vue")
);
</script>

<template>
  <Suspense>
    <template #default>
  <!-- <TheUsers /> -->
      <TodoDatas />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  <!-- <TheUsers />
    <hr /> -->
</template>
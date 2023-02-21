<script setup>
import { ref } from "vue";
const todoList = ref([]);
const host = "https://jsonplaceholder.typicode.com";

fetch(`${host}/todos/`)
  .then((response) => response.json())
  .then((json) => todoList.value = json);
</script>

<template>
       <h3>Todos</h3>
       <ul>
              <li v-for="todo in todoList" key="todo.id">{{ todo.title }}</li>
       </ul>
</template>
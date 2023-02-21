<script setup>
import { ref } from "vue";
const userList = ref([]);
const host = "https://jsonplaceholder.typicode.com";
// const isLoad = ref(false);
fetch(`${host}/users`)
  .then((response) => response.json())
  .then((json) => {
       userList.value = json
       // isLoad.value = true;
       });
</script>

<template>
       <h3>Users</h3>
       <!-- <ul v-if="isLoad">
              <li v-for="user in userList" key="user.id">{{ user.name }}</li>
       </ul>
       <span v-else>Loading...</span> -->
       <ul>
              <li v-for="user in userList" key="user.id">{{ user.name }}</li>
       </ul>
</template>
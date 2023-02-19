<template>
  <div class="container">
    <h3 class="text-center">BookMark List</h3>
    <div class="row">
      <div class="col-6 offset-3">
        <!-- <router-link to="/">HomePage</router-link>
        <router-link to="/new-bookmark">NewBookMark</router-link> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>
.navlink {
  border: 1px solid;
  text-decoration: none;
  border-color: #fa6055;
  font-size: large;
}
.active {
  color: white;
  background-color: #fa6055;
  border-color: #fa6055;
}
</style>
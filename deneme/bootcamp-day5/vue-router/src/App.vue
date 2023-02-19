<template>
  <router-link to="/" class="navlink" active-class="active">
    Ana Sayfa
  </router-link>
  <router-link to="/about" class="navlink" active-class="active">
    Hakkımda
  </router-link>
    <router-link to="/details" class="navlink" active-class="active">
    Detaylar
  </router-link>
  <router-view></router-view>
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
<template>
  <div class="container">
    <button @click="activeComponent='Red'">Red</button>
    <button @click="activeComponent='Green'">Green</button>
    <button @click="activeComponent='Blue'">Blue</button>
    <!-- 1.Yöntem -->
    <TheRed v-if="activeComponent==='Red'" class="mb-2"/>
    <TheGreen v-if="activeComponent==='Green'" class="mb-2"/>
    <TheBlue v-if="activeComponent==='Blue'" class="mb-2"/>
    <!-- 2. Ve En Güzel Yöntem-->
    {{ activeComponent }}
    <keep-alive>
      <component: is="activeComponent">
       <input/>
      </component:>
    </keep-alive>
  </div>
</template>

<script>
import TheRed from "@/components/TheRed.vue";
import TheGreen from "@/components/TheGreen.vue";
import TheBlue from "@/components/TheBlue.vue";

export default {
  components: {
    TheRed,
    TheGreen,
    TheBlue,
  },
  data(){
    return{
      activeComponent: "Red"
    };
  }
};
</script>
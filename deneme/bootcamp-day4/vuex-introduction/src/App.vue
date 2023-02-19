<template>
  <!-- <div class="container">
    <p>
      {{ $store.state.person }}
      {{ $store.state.theme }}
      {{ $store.state.numbers }}
    </p>
    <hr />
    <div>
      mapGetters ile veri yazdırma
      
    </div>
  </div> -->
<UserList/>
<AddList/>
</template>

<script>
// import { mapGetters } from "vuex";
import UserList from './components/UserList.vue';
import AddList from './components/AddList.vue';
export default {
  components:{
    UserList,
    AddList
  }
  // created() {
  //   console.log(this.$store.state.person);
  //   console.log(this.$store.state.theme);
  //   // Heryere böyle yazmak yerine aşağıdaki işlemi getters da yapıp çağırmak daha mantıklı
  //   // console.log(this.$store.state.items.filter(i=>i.category==="Mobilya"));
  //   console.log(this.$store.getters.woodItems);
  //   console.log(this.$store.getters.activeUser);
  // },
  // computed: mapGetters(["woodItems"]),
  // computed: {
  //   ...mapGetters(["woodItems","activeUser"]),
  //   customComputed(){
  //     return console.log('object :>> ');
  //   }
  // }
};
</script>
<template>
  <div>
    <button @click="addItem">Ekle</button>
  </div>
</template>
<script>
export default {
  methods: {
    addItem() {
      const userData = {
        id: new Date().getTime,
        title: "Raf",
        category: "Mobilya",
      };
      this.$store.commit("newItem", userData);
      this.$store.dispatch("logFunction", userData);
    },
  },
};
</script>
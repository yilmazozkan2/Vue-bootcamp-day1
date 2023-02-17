<template>
  <TheModal>
   
       <template #title>
      <h1>Slots İle Gelen Title</h1>
    </template>
    <template #default>
      bu slot il gösterilen default bir bilgi
    </template>
   </TheModal>
</template>

<script>
import TheModal from "@/components/TheModal.vue";
export default {
  components: {
    TheModal,
  },
};
</script>
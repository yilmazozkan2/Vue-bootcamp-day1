<template>
  <div class="form-area">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="userData.title"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">Url</label>
      <input
        type="text"
        class="form-control"
        id="url"
        v-model="userData.url"
        placeholder="https://..."
      />
    </div>
  </div>
  <div class="d-flex justify-content-end align-items-center">
    <button
      class="btn btn-sm btn-secondary me-2"
      @click="$router.push({ name: 'HomePage' })"
    >
      İptal
    </button>
    <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios.post('/bookmarks', this.userData).then(save_response=>{
console.log(save_response);
      });
      this.$router.push("/");
    },
  },
};
</script>
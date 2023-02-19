<template>
  <button
    class="btn btn-primary"
    @click="$router.push({ name: 'NewBookMark' })"
  >
    + Yeni Ekle
  </button>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Başlık</th>
        <th scope="col">URL</th>
        <th scope="col">Sil</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
        <th scope="row">1</th>
        <td>{{ bookmark.title }}</td>
        <td>
          <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
        </td>
        <td>
          <button
            @click="deleteBookmark(bookmark)"
            class="btn btn-sm btn-danger"
          >
            Sil
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios
      .get("/bookmarks")
      .then((bookmark_response) => {
        console.log(bookmark_response);
        this.bookmarkList = bookmark_response.data || [];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteBookmark(bookmark) {
      this.$appAxios
        .delete(`/bookmarks/${bookmark.id}`)
        .then((delete_Bookmark) => {
          console.log(delete_Bookmark);
          this.bookmarkList = this.bookmarkList.filter(b => b.id !== bookmark.id);
        });
    },
  },
};
</script>
<template>
  <div class="container">
    <input placeholder="Ne Alıcaksınız?" @keydown.enter="onSave" />
    <ul v-if="itemsList.length > 0">
      <li  v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{ item.title }}</span>
      <button class="red" @click="onDelete(item)">Sil</button>

      </li>
    </ul>
    <div v-else class="bg-blue text-white">Herhangi Bir Ürün Yoktur</div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      itemsList:[]
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((response_items) => {
      this.itemsList = response_items.data || [];
    });
  },
  methods: {
    onSave(e) {
      // alert(e.target.value);
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        .then((save_response) => {
          console.log(save_response);
          e.target.value = "";
          e.target.focus();
          this.itemsList.push(save_response.data);
        });
    },
    onDelete(item){
      axios.delete(`http://localhost:3000/items/${item.id}`).then(response_delete=>{
        console.log('Silinen Eleman :>> ', item.title);
        console.log(response_delete);
        this.itemsList = this.itemsList.filter(i=>i.id !== item.id);
      });
    }
  },
};
</script>